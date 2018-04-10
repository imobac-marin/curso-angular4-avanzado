import { Component } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent {

  title = 'GuardarEmail';
  emailContacto: string;

  guardarEmail() {
    console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log('Desde el localStorage: ' + localStorage.getItem('emailContacto'));
  }

}
