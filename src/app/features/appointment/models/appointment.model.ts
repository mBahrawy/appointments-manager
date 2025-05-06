export interface Appointment {
    id: number;
    title: string;
    date: string;
    appointmentType?: 'Consultation' | 'Follow-up' | 'Check-up' | 'Emergency';
    status: 'مؤكد' | 'قيد الانتظار' | 'ملغي';
    startTime: string;
    endTime: string;
    location: string;
}
