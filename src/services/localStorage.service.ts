import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

constructor() { }

  get(item: string) {
    return JSON.parse(localStorage.getItem(item));
  }

  set(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}
