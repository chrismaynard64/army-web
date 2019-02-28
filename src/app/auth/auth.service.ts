import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { User } from '../model/user';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'NwE7GrpJpxJCE5S9adZ9zInwf2nk8S6r',
    domain: 'koadah.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/logincallback',
    scope: 'openid email profile'
  });

  currentUser: User = null;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('authUser',  JSON.stringify(new User(authResult.idTokenPayload.email,
      authResult.idTokenPayload.nickname, authResult.idTokenPayload.name)));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('authUser')
    this.currentUser = null;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    ///return true;
    
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');

    let ret: boolean = new Date().getTime() < expiresAt;

    if (ret && !this.currentUser) {
      this.currentUser = {...new User(), ...(JSON.parse(localStorage.getItem('authUser')))};
    }

    return ret;
 
  }

  public retieveAuthInfoFromUrl() {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
         console.log("Could not parse hash", err);
         return;
      }

      console.log("Auth successful.  Auth result:", authResult);    


    })
  }


}

