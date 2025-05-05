import { Routes } from '@angular/router';

export const APPOINTMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/appointments-list/appointments-list.component').then(m => m.AppointmentsListComponent)
  }
];
