import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { DemoComponent } from './demo/demo.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from "./profile/profile.component"

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ]},
  { path: '', component: HomeComponent, /* canActivate: [AuthGuard]*/ },
 // { path: 'demo', component: DemoComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
