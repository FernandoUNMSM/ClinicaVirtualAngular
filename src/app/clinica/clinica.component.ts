import { Component, OnInit } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from '../services/consulta.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

  public email: string;
  public nombre: string;
  public dni: string;

  public usuario:any;

  public consulta:any;

  public especialidad:any;

  public allDates: any;
  public userDate: any;
  public userDates:any;
  public datesFin: any;

  public nombreDoctor = ["Castillo Guerrero Jorge","Gomez Correa Guissela","Barrenechea Quispe Ignacio","Dr. Cadillo Gamero Gustavo","Dra. Herrera Zegarra Maria","Dr. Cortez de la Vega Pedro"];
  hora = '17:05';
  public fecha = ['18/09/2020','10/09/2020','12/09/2020','15/09/2020','17/09/2020',];


  public consultaArray: any[];
  constructor(
    private UserService:UserService,
    private ConsultaService: ConsultaService,
    private _route: ActivatedRoute, 
    private _router: Router, 
  ) { }

  ngOnInit(): void {
    this.getAllDates();

    let usuarioArrayJson = localStorage.getItem("usuarioActualClinica");
    this.usuario = JSON.parse(usuarioArrayJson).user;

    this.nombre = this.usuario.name;
    this.email = this.usuario.email;
    this.dni = this.usuario.dni;  
  }
  getAllDates(){
    this.ConsultaService.getAllDates()
    .subscribe((newUser)=>{
      this.allDates = JSON.parse(JSON.stringify(newUser)).dates;
      this.userDate = this.allDates.filter(element => element.user == this.usuario.name);
      this.userDates = this.userDate.filter(element => element.time == false);
      this.datesFin = this.userDate.filter(element => element.time == true);
    })
  }
  getDate(_id:any){
    console.log(_id);

    this.ConsultaService.getDate(_id)
    .subscribe((newDate)=>{
      var consultaActual = JSON.stringify(newDate);
      // console.log(consultaActual)
      localStorage.setItem("consultaActual", consultaActual);
    })
    // location.reload();
    this._router.navigate(['/date-info']);
  }

  faUserAlt = faUserAlt;
}
