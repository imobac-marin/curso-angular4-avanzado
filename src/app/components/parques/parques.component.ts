import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {

@Input() nombre: string;
@Input() metros: number;
public vegetacion: string;
public abierto: boolean;

  constructor() {
    this.vegetacion = 'Alta';
    this.abierto = true;
   }

  ngOnInit() {
  }

}
