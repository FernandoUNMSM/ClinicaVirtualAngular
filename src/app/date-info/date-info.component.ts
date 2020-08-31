import { Component, Input, OnInit } from '@angular/core';
import { faUserAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ConsultaService } from '../services/consulta.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.css']
})
export class DateInfoComponent implements OnInit {
  public especialidad: any;
  public nombre: any;
  public puntuacion: any;
  public universidad: any;
  public tiempoServicio: any;
  public alergia: any;
  public medicamento: any;
  public finalizada: any;
  public id: string;

  public consultaActual: any;
  public sintomas: any;
  doctorInfoArray: any[] = [];
  doctorInfo: any;

  recomendaciones: any;

  constructor(
    private http: HttpClient,
    private ConsultaService: ConsultaService
    ) {

    this.finalizada = true;
  }

  ngOnInit(): void {
    this.consultaActual = JSON.parse(localStorage.getItem("consultaActual")).date;
    console.log(this.consultaActual);

    this.especialidad = this.consultaActual.especialidad;
    this.medicamento = this.consultaActual.medicamento;
    this.alergia = this.consultaActual.alergia;
    this.sintomas = this.consultaActual.sintomas;
  }
  generarPDF(){
    var doc = new jsPDF();
    doc.text(this.sintomas,20, 20 );
    doc.text("jola",60,20);
    doc.save("receta.pdf");
  }  

  faUserAlt = faUserAlt;
  faArrowLeft = faArrowLeft;
  
}
