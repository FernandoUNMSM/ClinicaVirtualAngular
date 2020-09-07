import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Consulta } from "./../interfaces/consulta";

@Injectable({
  providedIn: "root"
})
export class ConsultaService {

  constructor(
    private http: HttpClient
  ) { }
  
  createDate(consulta: Consulta){
    const path = "https://bicicletas-api.herokuapp.com/calidad/dates";
    return this.http.post(path, consulta);
  }

  getAllDates(){
    const path2 = "https://bicicletas-api.herokuapp.com/calidad/dates";
    return this.http.get(path2);
  }
  getDate(id: string){
    const path3 = `https://bicicletas-api.herokuapp.com/calidad/dates/${id}`;
    return this.http.get(path3);
  }
}
