import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentStatus } from '../../models/appointment.model';
import { RouterLink } from '@angular/router';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;
  @Output() cancelAppointment = new EventEmitter<Appointment>();
  appointmentStatus = AppointmentStatus;
  ref: DynamicDialogRef | undefined;
  constructor(    private dialogService: DialogService,) {}

  onCancelAppointment(): void {
    this.ref = this.dialogService.open(ConfirmationDialogComponent, {
      dismissableMask: true,
      width: '400px',
      data: {
        title: "إلغاء موعد الاختبار",
        message: `هل انت متاكد من الغاء '${this.appointment.title}'`,
        confirmBtnText: "نعم, إلغاء الموعد",
        cancelBtnText: "تجاهل"
      }
    });

    this.ref.onClose.subscribe((submitted: boolean) => {
      submitted && this.appointment.id && this.handelCancelAppointment();
    });
  }

  handelCancelAppointment() {
    this.cancelAppointment.emit(this.appointment);
  }
}
