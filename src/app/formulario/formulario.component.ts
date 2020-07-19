import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { 
    this.indice = 1;
    this.inputsActual=1;
  }

  ngOnInit(): void {
  }

  sumarSintoma(){
      const sintomas = document.querySelectorAll(".sintomas-container input");
      console.log(sintomas.length);
      this.indice = sintomas.length;
      this.inputsActual++;
      
  }

  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
}
