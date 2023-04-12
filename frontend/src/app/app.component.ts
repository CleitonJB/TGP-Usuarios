import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showFiller: boolean = false;
  public currentUser!: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void{
    this.currentUser = JSON.parse(localStorage.getItem('user') as string);
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.navigateTo('login');
  }

  public navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}