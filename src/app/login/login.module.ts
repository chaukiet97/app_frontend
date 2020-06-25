import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FmloginComponent } from './fmlogin/fmlogin.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { FmprofileComponent } from './fmprofile/fmprofile.component';


@NgModule({
  declarations: [LoginComponent, FmloginComponent, FmprofileComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '499087360262-bth5cgrmmb5emf29rks5ca7imupi2o4v.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('260427561864502'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
})
export class LoginModule { }
