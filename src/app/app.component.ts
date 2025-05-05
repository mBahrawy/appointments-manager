import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      <div class="flex flex-1">
        <app-sidebar></app-sidebar>
        <main class="flex-1 p-8 bg-gray-50">
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  title = '42-group-task';
}
