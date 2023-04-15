import { Injectable } from '@angular/core';

import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly USER_KEY: string = 'user';

  constructor() { }

  //* Default
  private setDataAtStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(JSON.parse(JSON.stringify(value))));
  }

  private getStorageData(key: string): string | null {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  private removeDataAtStorage(key: string): void {
    localStorage.removeItem(key);
  }

  //* User
  public setUser(user: User): void {
    this.setDataAtStorage(this.USER_KEY, user);
  }

  public getUser(): User | null {
    return this.getStorageData(this.USER_KEY) as User | null;
  }

  public removeUser(): void {
    this.removeDataAtStorage(this.USER_KEY);
  }
}