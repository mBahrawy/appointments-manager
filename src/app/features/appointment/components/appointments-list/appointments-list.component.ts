import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../models/appointment.model';
import { DUMMY_APPOINTMENTS } from '../../constants/dummy-data';
import { AppointmentComponent } from '../appointment/appointment.component';
import { FormsModule } from '@angular/forms';

type SortField = 'date' | 'title' | 'status';
type SortDirection = 'asc' | 'desc';

interface SortOption {
  value: SortField;
  label: string;
}

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [CommonModule, AppointmentComponent, FormsModule],
  templateUrl: 'appointments-list.component.html'
})
export class AppointmentsListComponent {
  appointments: Appointment[] = DUMMY_APPOINTMENTS;
  sortDirection: SortDirection = 'desc';
  sortField: SortField = 'date';
  isPopupOpen = false;
  document = document;

  sortOptions: SortOption[] = [
    { value: 'date', label: 'التاريخ' },
    { value: 'title', label: 'الاسم' },
    { value: 'status', label: 'الحاله' }
  ];

  constructor() {
    this.sortAppointments();
  }

  sortAppointments() {
    this.appointments = [...this.appointments].sort((a, b) => {
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
    this.sortAppointments();
    this.isPopupOpen = false;
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortAppointments();
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
    const appointment = this.appointments.find(a => a.id === appointmentId);
    if (appointment) {
      appointment.status = 'ملغي';
      this.sortAppointments();
    }
  }
}
