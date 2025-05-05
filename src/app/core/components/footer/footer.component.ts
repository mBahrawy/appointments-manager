import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-50 py-4 mt-auto">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-gray-600">&copy; 2024 42 Group Task. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
