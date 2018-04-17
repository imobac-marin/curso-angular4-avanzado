import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NgZoo';
  emailContacto: string;
  public identity: any;
  public url: string;

  constructor(private _userService: UserService, private _router: Router) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('Desde el localStorage: ' + localStorage.getItem('emailContacto'));
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
    this.identity = this._userService.getIdentity();
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    this.emailContacto = null;
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
