import { Appointment } from '../models/appointment.model';

export const DUMMY_APPOINTMENTS: Appointment[] = [
    {
        id: 1,
        title: 'اختبار القدرة المعرفية-التخصصات العلمية',
        date: '2024-08-11T00:00:00.000Z',
        startTime: '9:00',
        endTime: '11:00',
        location: 'جامعة أم القرى-العابدية',
        status: 'مؤكد',
        appointmentType: 'Consultation'
    },
    {
        id: 2,
        title: 'موعد مراجعة طبية',
        date: '2024-08-15T00:00:00.000Z',
        startTime: '10:00',
        endTime: '11:30',
        location: 'مستشفى الملك فيصل',
        status: 'قيد الانتظار',
        appointmentType: 'Check-up'
    },
    {
        id: 3,
        title: 'اجتماع مشروع التخرج',
        date: '2024-08-20T00:00:00.000Z',
        startTime: '13:00',
        endTime: '14:00',
        location: 'قاعة الاجتماعات - الجامعة',
        status: 'ملغي',
        appointmentType: 'Follow-up'
    },
    // New records
    {
        id: 4,
        title: 'مقابلة عمل',
        date: '2024-08-18T00:00:00.000Z',
        startTime: '8:30',
        endTime: '9:30',
        location: 'شركة التقنية الحديثة',
        status: 'مؤكد',
        appointmentType: 'Consultation'
    },
    {
        id: 5,
        title: 'ورشة عمل تطوير الذات',
        date: '2024-08-22T00:00:00.000Z',
        startTime: '16:00',
        endTime: '18:00',
        location: 'مركز التدريب المهني',
        status: 'قيد الانتظار',
        appointmentType: 'Check-up'
    },
    {
        id: 6,
        title: 'جلسة استشارية أسرية',
        date: '2024-08-25T00:00:00.000Z',
        startTime: '11:00',
        endTime: '12:00',
        location: 'مركز الاستشارات الأسرية',
        status: 'مؤكد',
        appointmentType: 'Consultation'
    },
    {
        id: 7,
        title: 'دورة تدريبية في البرمجة',
        date: '2024-08-28T00:00:00.000Z',
        startTime: '14:00',
        endTime: '17:00',
        location: 'معهد التقنية الرقمية',
        status: 'ملغي',
        appointmentType: 'Follow-up'
    },
    {
        id: 8,
        title: 'اجتماع أولياء الأمور',
        date: '2024-08-30T00:00:00.000Z',
        startTime: '18:00',
        endTime: '19:30',
        location: 'مدرسة المستقبل',
        status: 'قيد الانتظار',
        appointmentType: 'Consultation'
    }
];
