import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { fadeIn } from '../../animations';
@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css'],
  animations: [fadeIn]
})
export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Existen cambios en las propiedades');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Método OnInit lanzado');
  }

  ngDoCheck() {
    console.log('El DoCheck se ha lanzado');
  }

  ngOnDestroy() {
    console.log('El OnDestroy se ha lanzado');
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
