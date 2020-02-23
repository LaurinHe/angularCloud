import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';

import { VisualizationComponent } from './visualization/visualization.component';
import {FormularComponent} from './formular/formular.component';
import { UserManagComponent } from './user-manag/user-manag.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'home',
    component: VisualizationComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'reset-password',
    component: FormularComponent
  },
  {
    path: 'user-management',
    component: UserManagComponent
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
