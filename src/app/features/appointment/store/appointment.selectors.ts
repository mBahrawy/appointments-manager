import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from '../models/appointment.model';

// TODO : Needed to refactored

export const selectAppointmentState = createFeatureSelector<AppointmentState>('appointments');

export const selectAllAppointments = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.appointments
);

export const selectSelectedAppointment = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.selectedAppointment
);

export const selectAppointmentLoading = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.loading
);

export const selectAppointmentError = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state.error
);
