import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white shadow-md py-4">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold underline ">42 Group Task</h1>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a routerLink="/appointments"
                 class="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Appointments
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {}
