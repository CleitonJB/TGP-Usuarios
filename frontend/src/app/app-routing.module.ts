import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginGuard } from './pages/login/guard/login.guard';

import { RoleComponent } from './pages/role/role.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AutorizacaoComponent } from './pages/autorizacao/autorizacao.component';
import { FuncionalidadeComponent } from './pages/funcionalidade/funcionalidade.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: Page404Compoenent
  // },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserComponent
  },
  {
    path: 'role',
    canActivate: [AuthGuard],
    component: RoleComponent
  },
  {
    path: 'funcionalidade',
    canActivate: [AuthGuard],
    component: FuncionalidadeComponent
  },
  {
    path: 'autorizacao',
    canActivate: [AuthGuard],
    component: AutorizacaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
