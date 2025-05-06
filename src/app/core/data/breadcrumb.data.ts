import { Breadcrumb } from '../interfaces/breadcrumb.interface';

export const BREADCRUMB_DATA: Breadcrumb = {
  items: [
    {
      label: 'الخدمات',
      path: '/',
      isActive: false
    },
    {
      label: 'خدمات الإختبارات',
      path: '/tasks',
      isActive: false
    },
    {
      label: 'إلغاء الإختبار',
      path: '/tasks/details',
      isActive: true
    }
  ]
};
