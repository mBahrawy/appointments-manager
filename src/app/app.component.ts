import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
  template: `
    <div class="flex min-h-screen">
      <app-sidebar class="flex"></app-sidebar>
      <div class="flex flex-1 flex-col bg-gray-50">
        <app-header></app-header>
        <main class="flex flex-1 bg-gray-50">
          <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = '42-group-task';
}
