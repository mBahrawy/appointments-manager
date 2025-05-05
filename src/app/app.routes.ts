import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'appointments',
    loadChildren: () => import('./features/appointment/appointment.routes').then(m => m.APPOINTMENT_ROUTES)
  },
  {
    path: '',
    redirectTo: 'appointments',
    pathMatch: 'full'
  }
];
