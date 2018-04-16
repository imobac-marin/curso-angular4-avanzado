import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Identifícate';
  public user: User;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    console.log('Se carga el componente Login');
  }

  onSubmit() {
    console.log(this.user);
  }

}
