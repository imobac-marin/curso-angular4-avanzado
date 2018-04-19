import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { GLOBAL } from '../../services/global';
@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css'],
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit {
  title = 'Cuidadores';
  public users: Array<User>;
  public status: string;
  public url: string;

  constructor(private _userService: UserService) {
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    console.log('keepers.component cargado!!');
    this.getKeepers();
  }
  getKeepers() {
    this._userService.getKeepers().subscribe(
      response => {
        if (!response.users) {
          this.title = 'No hay animales para listar';
        } else {
          this.users = response.users;
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
