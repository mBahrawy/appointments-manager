import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, of, switchMap } from 'rxjs';
import { Appointment, AppointmentStatus } from '../../models/appointment.model';
import * as AppointmentSelectors from '../../store/appointment.selectors';
import { SanitizerService } from '../../../../core/services/sanitaizer.service';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { AppointmentService } from '../../services/appointment.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-appointment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-detail.component.html',
})
export class AppointmentDetailComponent implements OnInit {
  appointment$!: Observable<Appointment | null>;
  error$!: Observable<string | null>;
  appointmentStatus = AppointmentStatus;
  ref: DynamicDialogRef | undefined;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private sanitizerService: SanitizerService,
    private domSanitizer: DomSanitizer,
    private dialogService: DialogService,
    private appointmentService: AppointmentService,
  ) {}

  ngOnInit(): void {
    this.error$ = this.store.select(AppointmentSelectors.selectAppointmentError);

    this.appointment$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (!id) {
          return of(null);
        }
        const appointmentId = +id;
        return this.store.select(AppointmentSelectors.selectAppointmentById(appointmentId)).pipe(map(data => {
          if (!data) {
            return null;
          }
          return {
            ...data,
            safeHTMLDetails: this.sanitizerService.sanitizeHtml(data.details)
          }
        }));
      })
    );
  }
  onCancelAppointment(appointment: Appointment): void {
    this.ref = this.dialogService.open(ConfirmationDialogComponent, {
      dismissableMask: true,
      width: '400px',
      data: {
        title: "إلغاء موعد الاختبار",
        message: `هل انت متاكد من الغاء '${appointment.title}'`,
        confirmBtnText: "نعم, إلغاء الموعد",
        cancelBtnText: "تجاهل"
      }
    });

    this.ref.onClose.subscribe((submitted: boolean) => {
      submitted && appointment.id && this.handelCancelAppointment(appointment);
    });
  }

  handelCancelAppointment(a: Appointment) {
    this.appointmentService.cancelAppointment(a)

  }

}
