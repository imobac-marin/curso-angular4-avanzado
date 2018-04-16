import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  title = 'Registro';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
