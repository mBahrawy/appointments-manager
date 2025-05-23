import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from '../models/appointment.model';


export const selectAppointmentState = createFeatureSelector<AppointmentState>('appointments');

export const selectAllAppointments = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.appointments
);

export const selectAppointmentById = (id: number) => createSelector(
  selectAllAppointments,
  (appointments) => appointments.find(appointment => appointment.id === id) || null
);

export const selectAppointmentLoading = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.loading
);

export const selectAppointmentError = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.error
);
