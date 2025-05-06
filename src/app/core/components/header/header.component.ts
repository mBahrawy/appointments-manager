import { Component, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  darkMode = signal<boolean>(false);

  toggleMode() {
    this.darkMode.set(!this.darkMode());
    localStorage.setItem('mode', this.darkMode() ? 'dark' : 'light');
  }

  constructor() {
    const mode = localStorage.getItem('mode') || 'light';

    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    this.darkMode.set(mode === 'dark');
    localStorage.setItem('mode', mode);

    effect(() => {
      this.darkMode()
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark');
    });
  }
}
