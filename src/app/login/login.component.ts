import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faUserAlt, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("login") login:ElementRef;
  @ViewChild("registro") registro:ElementRef;
  @ViewChild("line") line:ElementRef;
  @ViewChild("incorrecto") incorrecto:ElementRef;
  @ViewChild("myPsw") myPsw:ElementRef;
  @ViewChild("myUser") myUser:ElementRef;
  public Usuario:any;
  public Contrasena:any;
  
  public nuevoUsuario:any;
  public email:any;
  public dni:any;
  public contrasena:any;
  public usuario:any;
  public indiceUsuario:number;

  constructor(private _route: ActivatedRoute, private _router: Router, private MiServicioService: MiServicioService) { 
    this.usuario = this.MiServicioService.nuevoUsuario;
  }

  ngOnInit(): void {
      console.log(this.usuario);
      this.indiceUsuario = Object.keys(this.usuario).length;
  }

  redireccion(){
    this.Contrasena = this.myPsw.nativeElement.value;
    this.Usuario = this.myUser.nativeElement.value;

    for(var i=0; i<this.indiceUsuario; i++){
      if(this.Usuario == this.usuario[i].dni && this.Contrasena == this.usuario[i].contrasena) {
        this._router.navigate(['/clinica']);
      }
      else {
        this.incorrecto.nativeElement.style.display="flex";
      }
    }
  }

  volverLogin(){
    location.reload();
  }

  generar(){
    this.usuario[this.indiceUsuario] = {nombre: this.nuevoUsuario, dni: this.dni, email: this.email, contrasena: this.contrasena};
    localStorage.setItem("nuevoUsuario", JSON.stringify(this.usuario));
    this._router.navigate(['/clinica']);
  }

  abrirRegistro(){
    this.registro.nativeElement.classList.add('registroActive');
    this.login.nativeElement.classList.add('loginOff');
    this.line.nativeElement.classList.add('lineActive');
  }

  abrirLogin(){
    this.registro.nativeElement.classList.remove('registroActive');
    this.registro.nativeElement.style.height=""
    this.login.nativeElement.classList.remove('loginOff');
    this.line.nativeElement.classList.remove('lineActive');
  }

  faUserAlt = faUserAlt;
  faLock = faLock;
  faTimes = faTimes;
}
