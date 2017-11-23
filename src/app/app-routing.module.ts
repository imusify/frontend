import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChannelComponent } from './components/channel/channel.component';

import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/channels', pathMatch: 'full' },
    { path: 'signin',  component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path:'channel', component: ChannelComponent, canActivate: [AuthGuard]},
    { path: 'account/verify/:code', component: ActivateAccountComponent },
    { path: 'channels', component: DashboardComponent, canActivate: [AuthGuard] }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
