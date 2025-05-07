import { Routes } from '@angular/router';

export const APPOINTMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/appointments-list/appointments-list.component').then(m => m.AppointmentsListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./components/create-appointment/create-appointment.component').then(m => m.CreateAppointmentComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/appointment-detail/appointment-detail.component').then(m => m.AppointmentDetailComponent)
  }
];
