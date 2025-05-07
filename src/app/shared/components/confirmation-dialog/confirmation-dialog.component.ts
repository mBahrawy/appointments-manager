import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  imports: [DialogModule, ButtonModule, CommonModule],
  providers: [DialogService]
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {
  private readonly _subscription = new Subscription();

  constructor(
    private _ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public router: Router,
  ) {}

  ngOnInit() {
    // closing when navigating back from the browser
    this._subscription.add(
      this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
        if (this.config) {
          this._ref.close();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  close() {
    this._ref.close();
  }

  confirm() {
    this._ref.close({ confirmed: true });
  }
}
