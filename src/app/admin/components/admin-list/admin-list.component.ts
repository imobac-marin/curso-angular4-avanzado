import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { Animal } from '../../../models/animal.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  title = 'Listado de animales';
  numbers = new Array(10);
  animals = new Array<Animal>();
  status: string;
  token: string;
  public busqueda: string;

  constructor(private _router: Router, private _animalService: AnimalService, private _userService: UserService) {
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    console.log('Admin-list component cargado');
    this.getAnimals();
  }

  getAnimals() {
    this._animalService.getAnimals().subscribe(
      response => {
        if (!response.animals) {
          this.title = 'No hay animales para listar';
        } else {
          this.animals = response.animals;
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

  deleteAnimal(id: string) {
    if (this.token != null) {
      this._animalService.deleteAnimal(this.token, id).subscribe(
        response => {
          if (!response.animal) {
            console.log('error en el servidor');
          } else {
            console.log('Se ha borrado el animal');
            this.getAnimals();
            $('#myModal-' + id).modal('hide');
          }
        },
        error => {
          console.log('error en el servidor: ' + error);
        }
      );
    } else {
      alert('No se encuentra el token. Se le redigirá al home');
      this._router.navigate(['/home']);
    }
  }

}
