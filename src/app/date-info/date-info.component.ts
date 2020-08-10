import { Component, OnInit } from '@angular/core';
import { faUserAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.css']
})
export class DateInfoComponent implements OnInit {
  especialidad: any;
  nombre: any;
  puntuacion: any;
  universidad: any;
  tiempoServicio: any;
  fecha: any;
  hora: any;
  finalizada: any;

  faUserAlt = faUserAlt;
  faArrowLeft = faArrowLeft;

  doctorInfoArray: any[] = [];
  doctorInfo: any;

  constructor(private http: HttpClient) {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreDoctor = urlParams.get('name').replace(/ /g, '%20');
    const fecha = urlParams.get('date');
    const hora = urlParams.get('hour');
    const finalizada = urlParams.get('done');
    const url = `https://clinica-virtual-api.herokuapp.com/doctors/${nombreDoctor}`;

    this.http.get(url).subscribe(data => {
      this.doctorInfo = data['doctor'];

      this.especialidad = this.doctorInfo.specialty;
      this.nombre = this.doctorInfo.name;
      this.puntuacion = this.doctorInfo.score;
      this.universidad = this.doctorInfo.university;
      this.tiempoServicio = this.doctorInfo.years_service;
    });

    this.fecha = fecha;
    this.hora = hora;
    this.finalizada = (finalizada === 'true');
  }

  ngOnInit(): void {
    this.sintomas = [
      'Dolor en el cuerpo',
      'Fiebre de 38ºC',
      'Estornudos constantes',
      'Flujo nasal'
    ]

    this.recomendaciones = [
      'Tomar líquidos calientes',
      'Evitar cosas frías',
      'Evitar actividad física',
    ]
  }

}
