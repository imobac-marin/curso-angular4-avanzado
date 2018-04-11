import { Component, OnInit } from '@angular/core';
import { fundido } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fundido]
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NgZoo';

  constructor() { }

  ngOnInit() {
    console.log('home.component cargado!!');
  }

}
