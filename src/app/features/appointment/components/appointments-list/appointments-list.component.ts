import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentStatus } from '../../models/appointment.model';
import { DUMMY_APPOINTMENTS } from '../../constants/dummy-data';
import { AppointmentComponent } from '../appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as AppointmentActions from '../../store/appointment.actions';
import * as AppointmentSelectors from '../../store/appointment.selectors';

type SortField = 'date' | 'title' | 'status';
type SortDirection = 'asc' | 'desc';

interface SortOption {
  value: SortField;
  label: string;
}

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [CommonModule, AppointmentComponent, FormsModule, RouterLink],
  templateUrl: 'appointments-list.component.html',
})
export class AppointmentsListComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {
    this.appointments$ = this.store.select(
      AppointmentSelectors.selectAllAppointments
    );
  }


  appointments$: Observable<Appointment[]>;
  private _subscription = new Subscription();
  sortDirection: SortDirection = 'desc';
  sortField: SortField = 'date';
  isPopupOpen = false;
  document = document;

  sortOptions: SortOption[] = [
    { value: 'date', label: 'التاريخ' },
    { value: 'title', label: 'الاسم' },
    { value: 'status', label: 'الحاله' },
  ];

  ngOnInit() {
    // Load dummy data into store
    this._subscription.add(
      this.appointments$.subscribe((appointments) => {
        (!appointments || !appointments.length) &&
          this.store.dispatch(
            AppointmentActions.loadAppointmentsSuccess({
              appointments: DUMMY_APPOINTMENTS,
            })
          );
      })
    )
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  sortAppointments(appointments: Appointment[]) {
    return [...appointments].sort((a, b) => {
      let comparison = 0;

      switch (this.sortField) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }

      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  onSortChange() {
    this.isPopupOpen = false;
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sort-popup') && !target.closest('.sort-icon')) {
      this.isPopupOpen = false;
    }
  }

  onCancelAppointment(appointmentId: number) {
    const appointment = DUMMY_APPOINTMENTS.find((a) => a.id === appointmentId);
    if (appointment) {
      const updatedAppointment = {
        ...appointment,
        status: AppointmentStatus.Cancelled,
      };
      this.store.dispatch(
        AppointmentActions.updateAppointmentSuccess({
          appointment: updatedAppointment,
        })
      );
    }
  }
}
