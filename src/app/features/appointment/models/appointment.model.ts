import { SafeHtml } from "@angular/platform-browser";

export enum AppointmentType {
  Consultation = 'Consultation',
  FollowUp = 'Follow-up',
  CheckUp = 'Check-up',
  Emergency = 'Emergency'
}

export enum AppointmentStatus {
  Scheduled = 'scheduled',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export interface Appointment {
    id?: number;
    appointmentType?: AppointmentType;
    title: string;
    status: AppointmentStatus;
    date: string;
    startTime?: string;
    endTime?: string;
    location?: string;
    details: string;
    safeHTMLDetails?: SafeHtml;
    clientName?: string;
    clientPhone?: string;
    clientEmail?: string;
}

export interface AppointmentState {
    appointments: Appointment[];
    selectedAppointment: Appointment | null;
    loading: boolean;
    error: string | null;
}
