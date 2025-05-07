import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentStatus } from '../../models/appointment.model';
import { DUMMY_APPOINTMENTS } from '../../constants/dummy-data';
import { AppointmentComponent } from '../appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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
export class AppointmentsListComponent implements OnInit {
  constructor(private store: Store) {}

  appointments$: Observable<Appointment[]> = of([]);
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
    this.appointments$ = this.store.select(
      AppointmentSelectors.selectAllAppointments
    );
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
