import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  title = 'Registro';
  public user: User;
  public status: string;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _userService: UserService) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    console.log('Componente registro cargado!!');
  }

  onSubmit() {
    this._userService.register(this.user).subscribe(
      response => {
        if (response.usuario) {
          this.status = 'success';
          this.user = new User('', '', '', '', '', 'ROLE_USER', '');
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error + 'Error al dar de alta');
      }
    );
  }
}
