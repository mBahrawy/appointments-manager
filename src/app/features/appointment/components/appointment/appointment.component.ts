import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;
  @Output() cancelAppointment = new EventEmitter<number>();

  onCancelClick() {
    if (confirm('هل أنت متأكد من إلغاء هذا الموعد؟')) {
      this.cancelAppointment.emit(this.appointment.id);
    }
  }
}
