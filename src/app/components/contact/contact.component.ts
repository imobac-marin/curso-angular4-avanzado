import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {

  title = 'Contacto';
  constructor() { }

  ngOnInit() {
    console.log('contact.component cargado!!');
  }

}
