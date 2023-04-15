import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleComponent } from './pages/role/role.component';
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
