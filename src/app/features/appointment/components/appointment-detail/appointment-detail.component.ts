import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, of, switchMap } from 'rxjs';
import { Appointment, AppointmentStatus } from '../../models/appointment.model';
import * as AppointmentSelectors from '../../store/appointment.selectors';
import { SanitizerService } from '../../../../services/sanitaizer.service';

@Component({
  selector: 'app-appointment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-detail.component.html'
})
export class AppointmentDetailComponent implements OnInit {
  appointment$!: Observable<Appointment | null>;
  error$!: Observable<string | null>;
  appointmentStatus = AppointmentStatus;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private sanitizerService: SanitizerService
  ) {}

  ngOnInit(): void {
    this.error$ = this.store.select(AppointmentSelectors.selectAppointmentError);

    // Get appointment by ID from the store
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
            details: this.sanitizerService.sanitizeHtml(data.details as string)
          }
        }));
      })
    );
  }
  onCancel(): void {
    // TODO: Implement cancel functionality
  }
}
