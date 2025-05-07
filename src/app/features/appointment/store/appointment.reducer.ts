import { createReducer, on } from '@ngrx/store';
import { AppointmentState } from '../models/appointment.model';
import * as AppointmentActions from './appointment.actions';

export const initialState: AppointmentState = {
  appointments: [],
  selectedAppointment: null,
  loading: false,
  error: null
};

export const appointmentReducer = createReducer(
  initialState,

  // Load Appointments
  on(AppointmentActions.loadAppointments, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AppointmentActions.loadAppointmentsSuccess, (state, { appointments }) => ({
    ...state,
    appointments,
    loading: false
  })),
  on(AppointmentActions.loadAppointmentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Get Appointment By Id
  on(AppointmentActions.getAppointmentById, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AppointmentActions.getAppointmentByIdSuccess, (state, { appointment }) => ({
    ...state,
    selectedAppointment: appointment,
    loading: false
  })),
  on(AppointmentActions.getAppointmentByIdFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Create Appointment
  on(AppointmentActions.createAppointment, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AppointmentActions.createAppointmentSuccess, (state, { appointment }) => ({
    ...state,
    appointments: [...state.appointments, appointment],
    loading: false
  })),
  on(AppointmentActions.createAppointmentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Update Appointment
  on(AppointmentActions.updateAppointment, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AppointmentActions.updateAppointmentSuccess, (state, { appointment }) => ({
    ...state,
    appointments: state.appointments.map(a => a.id === appointment.id ? appointment : a),
    loading: false
  })),
  on(AppointmentActions.updateAppointmentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

);
