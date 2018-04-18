import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { GLOBAL } from '../../services/global';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  public animal: Animal;
  public url: string;

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _animalService: AnimalService) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('animal-detail component cargado');
    this.getAnimal();
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
