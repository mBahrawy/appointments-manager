import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { DUMMY_APPOINTMENTS } from './features/appointment/constants/dummy-data';
import { Store } from '@ngrx/store';
import { Toast } from "primeng/toast";
import * as AppointmentActions from './features/appointment/store/appointment.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, Toast],
  template: `
      <p-toast position="top-right" key="main-toaster"></p-toast>
    <div class="flex min-h-screen">
      <app-sidebar class="flex"></app-sidebar>
      <div class="flex flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <app-header></app-header>
        <main class="flex flex-1">
          <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    // Load dummy data into store
    this.store.dispatch(
      AppointmentActions.loadAppointmentsSuccess({
        appointments: DUMMY_APPOINTMENTS,
      })
    );
  }
}
