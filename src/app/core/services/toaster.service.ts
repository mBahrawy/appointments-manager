import { Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable()
export class ToasterService {
  mainKey = 'main-toaster';

  constructor(private messageService: MessageService) {
  }

  showMessage(options: ToastMessageOptions) {
    this.messageService.add({
      key: options?.key ? options?.key : this.mainKey,
      severity: options?.severity,
      summary: options?.summary,
      detail: options?.detail,
      life: options?.life ?? 5000
    });
  }
}
