import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'Animales';
  animals: Array<Animal>;
  public status: string;

  constructor(private _animalService: AnimalService) { }

  ngOnInit() {
    console.log('animals.component cargado!!');
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

}
