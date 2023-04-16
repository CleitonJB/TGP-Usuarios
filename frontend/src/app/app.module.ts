import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RoleToStringPipe } from './shared/pipes/role-to-string/role-to-string.pipe';

import { AppComponent } from './app.component';
import { RoleComponent } from './pages/role/role.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AutorizacaoComponent } from './pages/autorizacao/autorizacao.component';
import { FuncionalidadeComponent } from './pages/funcionalidade/funcionalidade.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RoleComponent,
    FuncionalidadeComponent,
    AutorizacaoComponent,
    LoginComponent,
    RegisterComponent,
    RoleToStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
