import { createAction, props } from '@ngrx/store';
import { Appointment } from '../models/appointment.model';

export const loadAppointments = createAction('[Appointment] Load Appointments');
export const loadAppointmentsSuccess = createAction(
  '[Appointment] Load Appointments Success',
  props<{ appointments: Appointment[] }>()
);
export const loadAppointmentsFailure = createAction(
  '[Appointment] Load Appointments Failure',
  props<{ error: string }>()
);

export const getAppointmentById = createAction(
  '[Appointment] Get Appointment By Id',
  props<{ id: number }>()
);
export const getAppointmentByIdSuccess = createAction(
  '[Appointment] Get Appointment By Id Success',
  props<{ appointment: Appointment }>()
);
export const getAppointmentByIdFailure = createAction(
  '[Appointment] Get Appointment By Id Failure',
  props<{ error: string }>()
);

export const createAppointment = createAction(
  '[Appointment] Create Appointment',
  props<{ appointment: Appointment }>()
);
export const createAppointmentSuccess = createAction(
  '[Appointment] Create Appointment Success',
  props<{ appointment: Appointment }>()
);
export const createAppointmentFailure = createAction(
  '[Appointment] Create Appointment Failure',
  props<{ error: string }>()
);

export const updateAppointment = createAction(
  '[Appointment] Update Appointment',
  props<{ appointment: Appointment }>()
);
export const updateAppointmentSuccess = createAction(
  '[Appointment] Update Appointment Success',
  props<{ appointment: Appointment }>()
);
export const updateAppointmentFailure = createAction(
  '[Appointment] Update Appointment Failure',
  props<{ error: string }>()
);
