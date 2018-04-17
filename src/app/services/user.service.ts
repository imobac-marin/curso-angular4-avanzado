import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {

  public url: string;
  public identity: any;
  public token: any;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  register(userToRegister) {
    const params = JSON.stringify(userToRegister);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'register', params, { headers: headers }).map(res => res.json());
  }

  signUpToApp(userToLogin, getToken = null) {
    if (getToken != null) {
      userToLogin.getToken = getToken;
    }
    // tslint:disable-next-line:prefer-const
    let params = JSON.stringify(userToLogin);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'login', params, { headers: headers }).map((res => res.json()));
  }

  getIdentity() {
    // tslint:disable-next-line:prefer-const
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== undefined) {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('token');

    if (token !== undefined) {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  updateUser(userToUpdate) {
    // tslint:disable-next-line:prefer-const
    let params = JSON.stringify(userToUpdate);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this._http.put(this.url + 'update-user/' + userToUpdate._id, params, { headers: headers }).map(res => res.json());
  }

}
