import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { User } from 'src/app/models/User';

import { UserService } from '../../services/user/user.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const existUser: User | null = this.localStorageService.getUser();

    return (!!existUser) ? this.setCurrentUser(existUser) : this.navigateToRegister();
  }

  private setCurrentUser(user: User): boolean {
    console.log("user (Auth): ", user);
    this.userService.setGlobalUser(user);
    return true;
  }

  private navigateToRegister(): boolean {
    this.router.navigateByUrl('register');
    return false;
  }
}