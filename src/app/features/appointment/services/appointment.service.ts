import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Appointment {
  id: number;
  title: string;
  date: Date;
  description: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {}

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  addAppointment(appointment: Omit<Appointment, 'id'>): Observable<Appointment> {
    const newAppointment = {
      ...appointment,
      id: this.appointments.length + 1
    };
    this.appointments.push(newAppointment);
    return of(newAppointment);
  }

  updateAppointment(id: number, appointment: Partial<Appointment>): Observable<Appointment | undefined> {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index !== -1) {
      this.appointments[index] = { ...this.appointments[index], ...appointment };
      return of(this.appointments[index]);
    }
    return of(undefined);
  }

  deleteAppointment(id: number): Observable<boolean> {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index !== -1) {
      this.appointments.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
