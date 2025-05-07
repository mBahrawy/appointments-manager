import { Injectable } from '@angular/core';
import { Appointment, AppointmentStatus } from '../models/appointment.model';
import * as AppointmentActions from '../store/appointment.actions';
import * as AppointmentSelectors from '../store/appointment.selectors';
import { Store } from '@ngrx/store';
import { ToasterService } from '../../../services/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private store: Store,
     private toasterService: ToasterService
    ) {}

  getAllAppointments() {
    return this.store.select(
      AppointmentSelectors.selectAllAppointments
    );
  }

  cancelAppointment(appointment: Appointment) {
    if (appointment) {
      const updatedAppointment = {
        ...appointment,
        status: AppointmentStatus.Cancelled,
      };
      this.store.dispatch(
        AppointmentActions.updateAppointmentSuccess({
          appointment: {
            ...updatedAppointment,
          },
        })
      );

      this.toasterService.showMessage({
        severity: 'success',
        summary: 'تم',
        detail: 'تم الغاء الميعاد بنجاح'
      })


    }
  }
}
