import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NgZoo';

  constructor() { }

  ngOnInit() {
    console.log('home.component cargado!!');
  }

}
