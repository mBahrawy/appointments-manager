import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="w-64 bg-white border-r border-gray-200 h-full">
      <nav class="p-4">
        <ul class="space-y-2">
          <li>
            <a routerLink="/appointments"
               routerLinkActive="bg-gray-100 font-medium"
               class="block px-4 py-3 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              <span>Appointments</span>
            </a>
          </li>
          <!-- Add more navigation items here -->
        </ul>
      </nav>
    </aside>
  `
})
export class SidebarComponent {}
