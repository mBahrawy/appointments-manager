import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Appointment } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentComponent } from '../appointment/appointment.component';

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
  constructor(private appointmentService: AppointmentService) {}

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
    this.appointments$ = this.appointmentService.getAllAppointments()
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

  onCancelAppointment(a: Appointment) {
    this.appointmentService.cancelAppointment(a)
  }
}
