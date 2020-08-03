import { Component, OnInit } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { MiServicioService } from '../mi-servicio.service';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {
  // dni = 12345678;
  // celular = 123456789;
  // edad = 20;
  // email = 'test@gmail.com';

  public dni:any;
  public celular:any;
  public edad:any;
  public email:any;
  public nombre:any;
  public usuario:any;
  public consulta:any;
  public consulLength:any;  
  public especialidad:any;
  public nombreDoctor = ["Castillo Guerrero Jorge","Gomez Correa Guissela","Barrenechea Quispe Ignacio","Dr. Cadillo Gamero Gustavo","Dra. Herrera Zegarra Maria","Dr. Cortez de la Vega Pedro"];
  hora = '17:05';
  public fecha = ['18/08/2020','10/08/2020','12/08/2020','15/08/2020','17/08/2020',];
  constructor(private MiServicioService: MiServicioService, private ConsultaService: ConsultaService) { 
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("nuevoUsuario"));
    this.consulta = JSON.parse(localStorage.getItem("nuevoConsulta"));
    this.nombre = this.usuario[0].nombre;
    this.dni = this.usuario[0].dni;
    this.email = this.usuario[0].email;

    if(this.consulta!=null){
      this.consulLength = Object.keys(this.consulta);
    }else{
      this.consulLength =0;
    }
  }

  faUserAlt = faUserAlt;
}