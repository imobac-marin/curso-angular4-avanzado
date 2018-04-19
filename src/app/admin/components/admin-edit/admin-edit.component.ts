import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal.model';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { User } from '../../../models/user.model';
import { fadeLateral } from '../../animation';

@Component({
  selector: 'app-admin-edit',
  templateUrl: '../admin-add/admin-add.component.html',
  styleUrls: ['./admin-edit.component.css'],
  animations: [fadeLateral]
})
export class AdminEditComponent implements OnInit {

  title = 'Editar';
  public url: string;
  public animal: Animal;
  public identity: any;
  public token: any;
  public status: any;
  public filesToUpload: Array<File>;
  public isEdit: boolean;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _animalService: AnimalService,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.url = GLOBAL.url;
    this.animal = new Animal('', '', '', 2018, '', new User('', '', '', '', '', '', ''));
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.isEdit = true;
  }

  ngOnInit() {
    console.log('admin-add component cargado');
    this.getAnimal();
  }

  onSubmit() {
    const id = this.animal._id;
    this._animalService.editAnimal(id, this.token, this.animal).subscribe(
      response => {
        if (!response.animal) {
          this.status = 'error';
          console.log(this.status);
        } else {
          this.status = 'success';
          this.animal = response.animal;
          // Subir la imagen del animal
          if (!this.filesToUpload) {
            this._router.navigate(['/animal', this.animal._id]);
          } else {
            // tslint:disable-next-line:max-line-length
            this._uploadService.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
                this._router.navigate(['/animal', this.animal._id]);
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

  getAnimal() {
    this._activatedRoute.params.forEach((params: Params) => {
      const id = params['id'];
      this._animalService.getAnimal(id).subscribe(
        response => {
          if (!response.animal) {
            this._router.navigate(['/home']);
          } else {
            this.animal = response.animal;
          }
        },
        error => {
          console.error(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

}
