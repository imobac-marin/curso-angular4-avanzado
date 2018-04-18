import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { Animal } from '../../../models/animal.model';

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
  constructor(private _router: Router, private _animalService: AnimalService) { }

  ngOnInit() {
    console.log('Admin-list component cargado');
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

}
