import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public title: string;
  public user: User;
  public identity: any;
  public token: any;
  public status: any;

  constructor(private _userService: UserService) {
    this.title = 'Actualizar mis datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
  }

  ngOnInit() {
    console.log('User-edit.component cargado');
  }

  onSubmit() {
    this._userService.updateUser(this.user).subscribe(
      response => {
        if (!response.user) {
          this.status = 'error';
        } else {
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
          // Subida de imagen
        }
      },
      error => {
        const errorMessage = error;
        if (errorMessage !== undefined) {
          this.status = 'error';
        }
      }
    );
  }

}
