import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NgZoo';
  emailContacto: string;
  public identity: any;

  constructor(private _userService: UserService) {
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
}
