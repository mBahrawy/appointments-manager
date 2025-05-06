import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BREADCRUMB_DATA } from '../../data/breadcrumb.data';
import { BreadcrumbItem } from '../../interfaces/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [];

  ngOnInit() {
    this.breadcrumbItems = BREADCRUMB_DATA.items;
  }
}
