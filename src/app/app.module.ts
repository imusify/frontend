import { AppRoutingModule } from './app-routing.module';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/shared/player/player.component';
import { WaveformComponent } from './components/shared/waveform/waveform.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoadingComponent } from './components/utils/loading/loading.component';

import { ApiService } from './services/api.service';
import { ImuConfigService } from './services/config.service';
import { InterceptedHttpService } from './services/intercepted-http.service';
import { UtilService } from './services/util.service';
import { PlayerService } from './services/player.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { ChannelService } from './services/channel.service';

import { AuthGuard } from './guard/auth.guard'; 


import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MomentModule } from 'angular2-moment';
import { CategoryComponent } from './widgets/category/category.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { UploadfileComponent } from './components/shared/uploadfile/uploadfile.component';
import { GenersPipe } from './pipes/geners.pipe';
import { ChannelComponent } from './components/channel/channel.component';
import { ChannelListComponent } from './widgets/channel-list/channel-list.component';
import { VotingComponent } from './widgets/voting/voting.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
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
    VotingComponent,
  ],
  imports: [ BrowserModule, 
             AppRoutingModule, 
             FormsModule, 
             ReactiveFormsModule, 
             HttpClientModule, 
             MomentModule
          ],
  providers: [ ApiService, 
               InterceptedHttpService, 
               ImuConfigService, 
               UtilService, 
               PlayerService, 
               AuthService,
               AuthGuard,
               PostService,
               ChannelService
             ],
  bootstrap: [AppComponent]
})
export class AppModule {}
