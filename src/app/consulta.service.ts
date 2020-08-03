import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  public nuevaConsulta:any;
  public indiceConsulta:number;
  constructor() { 
    this.nuevaConsulta={};
    this.indiceConsulta = 0;
  }
}
