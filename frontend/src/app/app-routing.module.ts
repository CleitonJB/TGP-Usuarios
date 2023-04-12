import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleComponent } from './components/role/role.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FuncionalidadeComponent } from './components/funcionalidade/funcionalidade.component';
import { AutorizacaoComponent } from './components/autorizacao/autorizacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
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
