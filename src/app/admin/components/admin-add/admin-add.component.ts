import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal.model';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { User } from '../../../models/user.model';

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
  public filesToUpload: Array<File>;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _animalService: AnimalService,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.url = GLOBAL.url;
    this.animal = new Animal('', '', '', 2017, '', new User('', '', '', '', '', '', ''));
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    console.log('admin-add component cargado');
  }

  onSubmit() {
    this._animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        if (!response.animalStored) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animalStored;
          // Subir la imagen del animal
          if (!this.filesToUpload) {
            this._router.navigate(['admin-panel/listado']);
          } else {
            this._uploadService.makeFileRequest(
              this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
                this._router.navigate(['admin-panel/listado']);
              });
          }

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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
