import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ClinicaVirtual";

  
  public Usuario:any;
  public Contrasena:any;
}
export var Usuario;