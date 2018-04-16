import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Identifícate';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('Se carga el componente Login');
  }

}
