import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild("anadirSintoma") anadirSintoma: ElementRef;
  @ViewChild("sintomasContainer") sintomasContainer: ElementRef;
  public indice:number;
  public inputsActual:number;
  public states:any;
  public state:String[];

  public consulta:any;
  public especialidad:any;
  public alergia:any;
  public medicamento:any;
  public tipoMedi:any;

  public select:any;

  public indiceConsulta:number;
  public indicecon:any;
  constructor(private ConsultaService: ConsultaService,private elem: ElementRef) { 
    this.indice = 1;
    this.inputsActual=1;
    this.states = ['Ginecologia','Oftalmologia','Cardiologia','Dermatologia','Endocrinologia','Gastroenterologia','Geriatria','Hematologia','Medicina General','Odontologia','Pediatria','Radiologia','Urologia','Traumatologia'];
    this.consulta = this.ConsultaService.nuevaConsulta;
  }

  ngOnInit(): void {
  }

  sumarSintoma(){
      const sintomas = document.querySelectorAll(".sintomas-container input");
      console.log(sintomas.length);
      this.indice = sintomas.length;
      this.inputsActual++;
      
  }
  aviso(){
    this.especialidad = this.states[this.select-1];
    this.indiceConsulta = this.ConsultaService.indiceConsulta;

    // this.indicecon=`indice${this.indiceConsulta}`;
    // this.consulta[this.indiceConsulta].especialidad = this.especialidad; 
    // console.log("especialidad: " + this.especialidad);
    // console.log(this.indiceConsulta)
    // console.log("indice de consulta "+ this.indiceConsulta);

    this.consulta[this.indiceConsulta] = {especialidad: this.especialidad};
    localStorage.setItem("nuevoConsulta", JSON.stringify(this.consulta));
    localStorage.setItem("indiceConsulta", JSON.stringify(this.indiceConsulta));

    this.ConsultaService.indiceConsulta++;
    alert("Informacion enviada");
  }
  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
}
