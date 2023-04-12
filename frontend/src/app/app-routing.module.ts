import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleComponent } from './components/role/role.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AutorizacaoComponent } from './components/autorizacao/autorizacao.component';
import { FuncionalidadeComponent } from './components/funcionalidade/funcionalidade.component';

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
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'funcionalidade',
    component: FuncionalidadeComponent
  },
  {
    path: 'autorizacao',
    component: AutorizacaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
