import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { User } from 'src/app/models/User';

import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const existUser: User | null = this.localStorageService.getUser();

    console.log("user: ", existUser);

    return (!!existUser) ? true : this.navigateToRegister();
  }

  private navigateToRegister(): boolean {
    this.router.navigateByUrl('register');
    return false;
  }
}