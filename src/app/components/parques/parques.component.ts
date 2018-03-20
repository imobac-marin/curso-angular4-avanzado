import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() getDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit() {
  }

  emitirEvento() {
    this.getDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto
    });
  }

}
