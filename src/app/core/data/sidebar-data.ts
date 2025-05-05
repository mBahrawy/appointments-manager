import { MenuItem } from '../interfaces/menu-item.interface';

export const SIDEBAR_MENU: MenuItem[] = [
  {
    title: 'لوحة التحكم',
    url: '/dashboard',
    iconClass: 'icon-home'
  },
  {
    title: 'الخدمات',
    url: '/appointments',
    iconClass: 'icon-dashboard'
  },
  {
    title: 'مواعيدي',
    url: '/patients',
    iconClass: 'icon-clock-2'
  },
  {
    title: 'المزيد',
    url: '/settings',
    iconClass: 'icon-dots'
  }
];
