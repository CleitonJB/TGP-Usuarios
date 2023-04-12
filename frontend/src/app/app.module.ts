import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoleComponent } from './components/role/role.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FuncionalidadeComponent } from './components/funcionalidade/funcionalidade.component';
import { AutorizacaoComponent } from './components/autorizacao/autorizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RoleComponent,
    FuncionalidadeComponent,
    AutorizacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
