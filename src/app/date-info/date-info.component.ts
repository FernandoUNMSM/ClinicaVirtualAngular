import { Component, OnInit } from '@angular/core';
import { faUserAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.css']
})
export class DateInfoComponent implements OnInit {
  especialidad = 'Especialidad';
  hora = '17:05';
  fecha = '18/07/2020';
  faUserAlt = faUserAlt;
  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
