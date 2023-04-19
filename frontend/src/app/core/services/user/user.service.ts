import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/User';

import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private $currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(this.localStorageService.getUser());

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  //* Methods
  public setGlobalUser(user: User): void {
    try {
      this.localStorageService.setUser(user);
      this.setUser(user);
    } catch (error) {
      console.error("Erro ao setar Usuário: ", error);
      alert("Erro ao setar Usuário :(");
    }
  }

  public removeGlobalUser(): void {
    try {
      this.localStorageService.removeUser();
      this.removeUser();
    } catch (error) {
      console.error("Erro ao remover Usuário: ", error);
      alert("Erro ao remover Usuário :(");
    }
  }

  public setUser(newUser: User | null): void {
    this.$currentUser.next(newUser);
  }

  public getUser(): BehaviorSubject<User | null> {
    return this.$currentUser;
  }

  public getUserValue(): User | null {
    return new BehaviorSubject<User | null>(this.$currentUser.value).value;
  }

  public removeUser(): void {
    this.$currentUser.next(null);
  }
}