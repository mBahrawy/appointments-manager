import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { SIDEBAR_MENU } from '../../data/sidebar-data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  menuItems: MenuItem[] = SIDEBAR_MENU;
}
