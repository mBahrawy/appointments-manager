import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentStatus } from '../../models/appointment.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;
  @Output() cancelAppointment = new EventEmitter<number>();
  appointmentStatus = AppointmentStatus;

  onCancelClick() {
    if (confirm('هل أنت متأكد من إلغاء هذا الموعد؟')) {
      this.cancelAppointment.emit(this.appointment.id);
    }
  }
}
