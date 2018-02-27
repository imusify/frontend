import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ChannelComponent } from './components/channel/channel.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { LegalComponent } from './pages/legal/legal.component';

import { AuthGuard } from './guard/auth.guard';
import { ResetPasswordGuard } from './guard/password.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/channels', pathMatch: 'full' },
    { path: 'signin',  component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotComponent },
    { path: 'users/reset-password/:code', component: PasswordResetComponent, canActivate: [ResetPasswordGuard] },
    { path: 'channel', component: ChannelComponent, canActivate: [AuthGuard]},
    { path: 'campaigns', component: CampaignsListComponent, canActivate: [AuthGuard]},
    { path: 'users/activate/:code', component: ActivateAccountComponent },
    { path: 'channels', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'legal', component: LegalComponent}
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
