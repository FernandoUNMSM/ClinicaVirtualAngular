import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  public nuevoUsuario:any;
  public indiceUsuario:number;
  constructor() {
    this.nuevoUsuario = {};
    this.indiceUsuario = 0;
    // localStorage.setItem("nuevoUsuario", JSON.stringify(this.nuevoUsuario));
    localStorage.setItem("indiceUsuario", JSON.stringify(this.indiceUsuario));
  }
}
