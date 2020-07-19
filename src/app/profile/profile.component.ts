import { Component, OnInit } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faUserAlt = faUserAlt;
  dni = 12345678;
  celular = 123456789;
  edad = 20;
  email = 'test@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

}
