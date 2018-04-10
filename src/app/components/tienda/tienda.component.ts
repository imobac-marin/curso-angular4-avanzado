import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public titulo: string;
  public nombreParque: string;
  public miParque;
  constructor() {
    this.titulo = 'Esta es una tienda';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function () {
      $('#textojq').slideToggle();
    });

    $('#caja').dotdotdot();
  }

  mostrarNombre() {
    console.log(this.nombreParque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque = event;
  }

  textoRichEditor(content) {
    console.log(content);
  }

}
