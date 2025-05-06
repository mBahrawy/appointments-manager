export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export interface Breadcrumb {
  items: BreadcrumbItem[];
}