import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { element } from 'protractor';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild("anadirSintoma") anadirSintoma: ElementRef;
  @ViewChild("sintomasContainer") sintomasContainer: ElementRef;
  public indiceSintomas: number;
  public sintomaActual: number;
  public especialidades: string[];

  public especialidad: number;
  public alergia: string;
  public medicamento: string;
  public email: boolean;
  public emailN: number;
  public sintomas: string[];
  public user: string;
  public time: boolean;
  public id: string;
  public sintomasLength: number;
  public sintomasText: any;
  constructor(
    private elem: ElementRef,
    private consultaService: ConsultaService
  ) {
    this.sintomaActual = 1;
    this.especialidades = ['Ginecologia', 'Oftalmologia', 'Cardiologia', 'Dermatologia', 'Endocrinologia', 'Gastroenterologia', 'Geriatria', 'Hematologia', 'Medicina General', 'Odontologia', 'Pediatria', 'Radiologia', 'Urologia', 'Traumatologia'];
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("usuarioActualClinica")).user.name;
    this.time = false;
    this.sintomasLength=1;
  }

  sumarSintoma() {
    const sintomas = document.querySelectorAll(".sintomas-container input");
    if(this.sintomasLength<5){
      this.sintomasLength++;
    }

  }

  generarConsulta() {
    this.email = (this.emailN == 0) ? true : false;
    var sintomas = [...this.elem.nativeElement.querySelectorAll('.sintoma')];
    this.sintomasText = sintomas.map(element => element.value);


    const consulta = {
      especialidad: this.especialidades[this.especialidad - 1],
      alergia: this.alergia,
      medicamento: this.medicamento,
      email: this.email,
      sintomas: this.sintomasText,
      user: this.user,
      time: this.time,
    }
    console.log(consulta);
    this.consultaService.createDate(consulta)
    .subscribe((newDate)=>{
      console.log(newDate);
    })
  }




  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
}
