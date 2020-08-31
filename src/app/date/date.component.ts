import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"],
})
export class DateComponent implements OnInit {
  // public consulta:any;
  // nombreDoctor = "Nombre del doctor";
  // hora = '17:05';
  // fecha = '18/08/2020';

  
  @Input() especialidad:any;
  @Input() nombreDoctor:any;
  @Input() hora:any;
  @Input() fecha:any;
  @Input() finalizada:any;
  @Input() id:any;

  constructor() {
  }


  ngOnInit(): void {
    // console.log(this.id);
    // localStorage.setItem("consultaActual","id");
  }
}
