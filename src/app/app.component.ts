import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Curso Angular 2-4-5 avanzado, MEAN, JWT, etc.';
  emailContacto: string;

  ngOnInit() {
    console.log('Desde el localStorage: ' + localStorage.getItem('emailContacto'));
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
}
