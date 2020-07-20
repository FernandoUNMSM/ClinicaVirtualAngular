import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"],
})
export class DateComponent implements OnInit {
  especialidad = "Especialidad";
  nombreDoctor = "Nombre del doctor";
  hora = '17:05';
  fecha = '18/07/2020';

  constructor() {}

  ngOnInit(): void {}
}