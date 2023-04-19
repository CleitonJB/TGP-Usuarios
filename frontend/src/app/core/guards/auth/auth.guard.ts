import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { User } from 'src/app/models/User';
import { RolesID } from 'src/app/models/Role';

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
    const page: string = route.url[0].path;
    
    if(!!existUser) {
      if(page == 'profile') {
        console.log('liberado');
        this.setCurrentUser(existUser);
        return true;
      } else if([RolesID.Diretor, RolesID.Gerente].includes(existUser.role!)) {
        this.setCurrentUser(existUser);
        return true;
      } else {
        this.navigateTo('profile');
        this.setCurrentUser(existUser);
        return false;
      }
    } else {
      this.navigateTo('register');
      return false;
    }
    //return (!!existUser) ? this.setCurrentUser(existUser) : this.navigateTo('register');
  }

  private setCurrentUser(user: User): void {
    console.log("user (Auth): ", user);
    this.userService.setGlobalUser(user);
    //return true;
  }

  private navigateTo(path: string): void {
    this.router.navigateByUrl(path);
    //return false;
  }
}