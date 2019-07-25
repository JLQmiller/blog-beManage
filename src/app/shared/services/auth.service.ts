import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSubject = new BehaviorSubject<string>(null);

  private logged = false;

  token: string;

  constructor() { }

  setAuth(user: string) {
    this.logged = true;
    this.usernameSubject.next(user);
  }

  setToken(token: string) {
    this._setTokenInCookie(token);
    this.token = `Token ${token}`;
  }

  resetToken() {
    this.token = this._getTokenInCookie();
  }

  private _setTokenInCookie(value: string) {
    let expTime = new Date();
    expTime.setTime(expTime.getTime() + 2 * 60 * 60 * 1000);
    document.cookie = `token=${value};expires=${expTime.toUTCString()}`;
  }

  private _getTokenInCookie() {
    let start = document.cookie.indexOf('token=');
    if (start != -1) {
      start += 6;
      let end = document.cookie.indexOf(";", start);
      if (end === -1) end = document.cookie.length;
      return document.cookie.substring(start, end);
    }
    return "";
  }

  private _deleteTokenInCookie() {
    this._setTokenInCookie("");
  }

  /**
   * 校验是否通过鉴权
   */
  isAuthenticated(): Observable<boolean> {
    if (this.logged) {
      return observableOf(true);
    }
    // return this.isLoggedIn().pipe(
      // tap(v => console.log(v)),
    // )
  }

  isLoggedIn() {
    return;
  }
}
