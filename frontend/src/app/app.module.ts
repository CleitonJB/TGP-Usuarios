import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RoleToStringPipe } from './shared/pipes/role-to-string/role-to-string.pipe';

import { AuthInterceptor } from './core/interceptors/auth/auth-interceptor';

import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { RoleComponent } from './pages/role/role.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AutorizacaoComponent } from './pages/autorizacao/autorizacao.component';
import { FuncionalidadeComponent } from './pages/funcionalidade/funcionalidade.component';
//
import { RoleDetailComponent } from './pages/role/role-detail/role-detail.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { AutorizacaoDetailComponent } from './pages/autorizacao/autorizacao-detail/autorizacao-detail.component';
import { FuncionalidadeDetailComponent } from './pages/funcionalidade/funcionalidade-detail/funcionalidade-detail.component';

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
    RoleDetailComponent,
    UserDetailComponent,
    AutorizacaoDetailComponent,
    FuncionalidadeDetailComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
