import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal.model';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  title = 'AdminAdd';
  public url: string;
  public animal: Animal;
  public identity: any;
  public token: any;
  public status: any;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _animalService: AnimalService,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.url = GLOBAL.url;
    this.animal = new Animal('', '', '', 2017, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    console.log('admin-add component cargado');
  }

  onSubmit() {
    console.log(this.animal);
    this._animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        if (!response.animalStored) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animalStored;
          // Subir la imagen del animal
          this._router.navigate(['admin-panel/listado']);
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
