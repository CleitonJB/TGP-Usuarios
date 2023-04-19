import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from './models/User';
import { RolesID } from './models/Role';

import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public ROLES = RolesID;

  public periodMessage: string | null = null;

  public showFiller: boolean = false;
  public currentUser!: User | null;

  private userSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  ngOnDestroy(): void {
    if(this.userSubscription) this.userSubscription.unsubscribe();    
  }

  private getUser(): void {
    this.userSubscription = this.userService.getUser().subscribe({
      next: (userData: User | null) => {
        console.log("Usuário atualizado: ", userData);
        this.currentUser = userData;
        this.periodMessage = this.getTimePeriod();
      },
      error: (error: any) => {
        console.error("Erro ao obter usuário atual: ", error);
      }
    });
  }

  private getTimePeriod(): string {
    const hours: number = new Date().getHours();

    if(hours >= 0 && hours <= 11) {
      return 'Bom dia';
    } else if(hours >= 12 && hours < 18) {
      return 'Boa tarde';
    } else { //if(hours >= 18)
      return 'Boa noite';
    }
  }

  public logout(): void {
    this.userService.removeGlobalUser();
    this.navigateTo('login');
  }

  public navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}