import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { RolesID } from 'src/app/models/Role';

import { UserService } from '../../services/user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userSevice: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const userRole: RolesID | null = (this.userSevice.getUserValue()?.role) ? this.userSevice.getUserValue()?.role! : null;

    const authReq = req.clone({
      headers: req.headers.set('Authorization', String(userRole))
    });

    return next.handle(authReq);
  }
}