import { MenuItem } from '../interfaces/menu-item.interface';

export const SIDEBAR_MENU: MenuItem[] = [
  {
    title: 'الرئيسيه',
    url: '/dashboard',
    iconClass: 'icon-home'
  },
  {
    title: 'الخدمات',
    url: '/services',
    iconClass: 'icon-dashboard'
  },
  {
    title: 'مواعيدي',
    url: '/appointments',
    iconClass: 'icon-clock-2'
  },
  {
    title: 'المزيد',
    url: '/settings',
    iconClass: 'icon-dots'
  }
];
