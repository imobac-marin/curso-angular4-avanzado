import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public titulo: string;
  public nombreParque: string;
  constructor() {
    this.titulo = 'Esta es una tienda';
  }

  ngOnInit() {
  }

  mostrarNombre() {
    console.log(this.nombreParque);
  }

}
