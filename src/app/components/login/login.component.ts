import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Identifícate';
  public user: User;
  public identity: any;
  public token: any;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _userService: UserService) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    console.log('Se carga el componente Login');
  }

  onSubmit() {
    // Loguear al usuario y conseguir el objeto
    this._userService.signUpToApp(this.user).subscribe(
      res => {
        this.identity = res.usuario;
        console.log('Identity: ' + JSON.stringify(this.identity));
        if (!this.identity || !this.identity._id) {
          console.log('El usuario no se ha logueado correctamente');
        } else {
          delete this.identity['password'];
          // Conseguir el token
          this._userService.signUpToApp(this.user).subscribe(
            response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                console.log('El token no se ha generado');
              } else {
                // Mostrar el token
                console.log(this.token);
              }
            },
            error => {
              console.log(error);
            }
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
