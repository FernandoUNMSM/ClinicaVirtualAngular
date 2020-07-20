import { Component, OnInit } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {
  faUserAlt = faUserAlt;
  dni = 12345678;
  celular = 123456789;
  edad = 20;
  email = 'test@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

}