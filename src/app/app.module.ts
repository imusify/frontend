import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/shared/player/player.component';
import { WaveformComponent } from './components/shared/waveform/waveform.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { LoadingComponent } from './components/utils/loading/loading.component';

import { ImuConfigService } from './services/config.service';
import { InterceptedHttpService } from './services/intercepted-http.service';
import { UtilService } from './services/util.service';
import { PlayerService } from './services/player.service';
import { PostService } from './services/post.service';
import { ChannelService } from './services/channel.service';
import { PageActionsService } from './services/page-actions.service';
import { AuthGuard } from './guard/auth.guard';
import { ResetPasswordGuard } from './guard/password.guard';

import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MomentModule } from 'angular2-moment';
import { ClipboardModule } from 'ngx-clipboard';

import { CategoryComponent } from './widgets/category/category.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { UploadfileComponent } from './components/shared/uploadfile/uploadfile.component';
import { GenersPipe } from './pipes/geners.pipe';
import { ChannelComponent } from './components/channel/channel.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChannelListComponent } from './widgets/channel-list/channel-list.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { VotingComponent } from './widgets/voting/voting.component';
import { LeftpaneComponent } from './widgets/leftpane/leftpane.component';
import { SafePipe } from './pipes/safe.pipe';
import { EditprofileComponent } from './components/editprofile/editprofile.component';

import { AboutComponent } from './widgets/about/about.component';
import { NeobalancePipe } from './pipes/neobalance.pipe';
import { WalletComponent } from './widgets/wallet/wallet.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ContactComponent } from './widgets/contact/contact.component';
import { AvatarPipe } from './pipes/avatar.pipe';

import { campaignsListReducer } from './reducers/campaignsList.reducer';
import { categoriesListReducer } from './reducers/categoriesList.reducer';
import { channelsListReducer } from './reducers/channelsList.reducer';
import { postsListReducer } from './reducers/postsList.reducer';
import { userReducer } from './reducers/user.reducer';
import { userWalletReducer } from './reducers/userWallet.reducer';
import { openCampaignsFormReducer } from './reducers/openCampaignsForm.reducer';

import { APIHandlerService } from './services/api-handler.service';
import { UserService } from './services/user.service';
import { UserAPIService } from './services/api-routes/user.service';
import { AuthAPIService } from './services/api-routes/auth.service';
import { PostAPIService } from './services/api-routes/posts.service';
import { CampaignAPIService } from './services/api-routes/campaigns.service';
import { ChannelsAPIService } from './services/api-routes/channels.service';
import { WalletAPIService } from './services/api-routes/wallet.service';
import { UploadAPIService } from './services/api-routes/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    PasswordResetComponent,
    HeaderComponent,
    LoadingComponent,
    ActivateAccountComponent,
    DashboardComponent,
    PlayerComponent,
    WaveformComponent,
    CategoryComponent,
    FileDropDirective,
    UploadfileComponent,
    GenersPipe,
    ChannelComponent,
    ChannelListComponent,
    CampaignComponent,
    CampaignsListComponent,
    VotingComponent,
    LeftpaneComponent,
    SafePipe,
    EditprofileComponent,
    AboutComponent,
    NeobalancePipe,
    WalletComponent,
    LegalComponent,
    ContactComponent,
    AvatarPipe,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
    ClipboardModule,
    StoreModule.forRoot({
      campaignsListReducer,
      categoriesListReducer,
      channelsListReducer,
      openCampaignsFormReducer,
      postsListReducer,
      userReducer,
      userWalletReducer
    })
  ],
  providers: [
    InterceptedHttpService,
    ImuConfigService,
    UtilService,
    PlayerService,
    AuthGuard,
    ResetPasswordGuard,
    PostService,
    ChannelService,
    PageActionsService,
    APIHandlerService,
    UserService,
    UserAPIService,
    AuthAPIService,
    PostAPIService,
    ChannelsAPIService,
    CampaignAPIService,
    WalletAPIService,
    UploadAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
