import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { GlobalsService } from "../../global";
import { Router } from '@angular/router';
@Component({
  selector: 'app-fmlogin',
  templateUrl: './fmlogin.component.html',
  styleUrls: ['./fmlogin.component.css']
})
export class FmloginComponent implements OnInit {
  private user: SocialUser;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private ws: GlobalsService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.ws.USERS.set(user, true);
      if (this.ws.USERS.check(true)) {
        this.router.navigate(['']);
      }
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }


}
