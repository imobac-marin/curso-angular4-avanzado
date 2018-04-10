import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {
  title = 'MainEmail';

  ngOnInit() {
    console.log('Componente principal del módulo cargado');
  }
}
