import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root',
})
export class SanitizerService {
  constructor(private domSanitizer: DomSanitizer){}

  sanitizeHtml(rawHtml: string): SafeHtml{
    const cleanHtml = DOMPurify.sanitize(rawHtml); // Sanitize with DOMPurify
    return this.domSanitizer.bypassSecurityTrustHtml(cleanHtml);
  }
}
