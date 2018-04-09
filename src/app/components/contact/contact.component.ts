import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contacto';
  emailContacto: string;
  constructor() { }

  ngOnInit() {
    console.log('contact.component cargado!!');
  }

  guardarEmail() {
    console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log('Desde el localStorage: ' + localStorage.getItem('emailContacto'));
  }
}
