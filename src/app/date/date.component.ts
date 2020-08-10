import { Component, OnInit, Input } from "@angular/core";
import { ConsultaService } from '../consulta.service';

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
  constructor(private ConsultaService: ConsultaService) {
    // this.consulta = JSON.parse(localStorage.getItem("nuevoConsulta"));
  }


  ngOnInit(): void {
    // this.especialidad = this.consulta[].especialidad;
  }
}
