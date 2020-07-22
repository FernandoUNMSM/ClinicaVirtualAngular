import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faUserAlt, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params} from '@angular/router';
// import { Usuario } from '../app.component';


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
  public Usuario:any;
  public Contrasena:any;
  constructor(private _route: ActivatedRoute, private _router: Router) { 
  }

  ngOnInit(): void {
  }

  redireccion(){
    this.Contrasena = this.myPsw.nativeElement.value;
    // console.log(this.Contrasena);
    if(this.Usuario == "test" && this.Contrasena == "test") {
      this._router.navigate(['/clinica']);
    }
    else {
      this.incorrecto.nativeElement.style.display="flex";
    }
  }
  volverLogin(){
    location.reload();
  }
  generar(){
    
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
