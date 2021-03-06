import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Animal } from '../models/animal.model';

@Injectable()
export class AnimalService {

  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal) {
    const params = JSON.stringify(animal);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this._http.post(this.url + 'animal', params, { headers: headers }).map(res => res.json());
  }

  getAnimals() {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this._http.get(this.url + 'get-animals', { headers: headers }).map(res => res.json());
  }

  getAnimal(id: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this._http.get(this.url + 'get-animal/' + id, { headers: headers }).map(res => res.json());
  }

  editAnimal(id: string, token: string, animal: Animal) {
    const params = JSON.stringify(animal);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this._http.put(this.url + 'update-animal/' + id, params, { headers: headers }).map(res => res.json());
  }

  deleteAnimal(token: string, id: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    const options = new RequestOptions({ headers: headers });

    return this._http.delete(this.url + 'get-animal/' + id, options).map(res => res.json());
  }

}
