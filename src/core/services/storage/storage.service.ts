import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly platformId = inject(PLATFORM_ID);

  getItem(key: string) {
    return this.platformId === 'browser' ? localStorage.getItem(key) : null;
  }

  setItem(key: string, value: string) {
    if (this.platformId === 'browser') {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string) {
    if (this.platformId === 'browser') {
      localStorage.removeItem(key);
    }
  }
}