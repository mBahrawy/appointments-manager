import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appointment, AppointmentStatus, AppointmentType } from '../../models/appointment.model';
import * as AppointmentActions from '../../store/appointment.actions';
import { Editor } from 'primeng/editor';
import { SanitizerService } from '../../../../services/sanitaizer.service';
@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Editor],
  templateUrl: './create-appointment.component.html',
  styles: []
})
export class CreateAppointmentComponent {
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private sanitizerService: SanitizerService,
  ) {
    this.appointmentForm = this.fb.group({
      clientName: ['', [Validators.required, Validators.minLength(3)]],
      clientPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      clientEmail: ['', [Validators.required, Validators.email]],
      requestDetails: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = {
        id: Math.floor(Math.random() * 1000),
        title: this.appointmentForm.value.clientName,
        date: new Date().toISOString(),
        details: this.appointmentForm.value.requestDetails,
        safeHTMLDetails: this.sanitizerService.sanitizeHtml(this.appointmentForm.value.requestDetails),
        status: AppointmentStatus.Scheduled,
        startTime: '09:00',
        endTime: '10:00',
        location: 'Main Office',
        clientName: this.appointmentForm.value.clientName,
        clientPhone: this.appointmentForm.value.clientPhone,
        clientEmail: this.appointmentForm.value.clientEmail,
        appointmentType: AppointmentType.Consultation
      };

      console.log(appointment)

      // Dispatch create appointment action
      this.store.dispatch(AppointmentActions.createAppointmentSuccess({ appointment }));
      this.router.navigate(['/appointments']);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.appointmentForm.get(controlName);
    if (!control) return '';

    if (control.hasError('required')) {
      return 'هذا الحقل مطلوب';
    }
    if (control.hasError('email')) {
      return 'الرجاء إدخال بريد إلكتروني صحيح';
    }
    if (control.hasError('minlength')) {
      return `الحد الأدنى للطول هو ${control.errors?.['minlength'].requiredLength} حرف`;
    }
    if (control.hasError('pattern')) {
      return 'الرجاء إدخال رقم هاتف صحيح (10 أرقام)';
    }
    return '';
  }
}
