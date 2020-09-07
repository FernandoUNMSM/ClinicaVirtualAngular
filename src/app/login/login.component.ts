import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faUserAlt, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

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

  public Usuario:string;
  public Contrasena:string;
  
  public nombre:string;
  public email:string;
  public password:string;
  public dni:string;

  public emailL:string;
  public passwordL:string;

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router, 
    private UserService: UserService) { 
  }

  ngOnInit(): void {
  }

  volverLogin(){
    location.reload();
  }

  abrirRegistro(){
    this.registro.nativeElement.classList.add('registroActive');
    this.login.nativeElement.classList.add('loginOff');
    this.line.nativeElement.classList.add('lineActive');
  }

  abrirLogin(){
    this.registro.nativeElement.classList.remove('registroActive');
    this.login.nativeElement.classList.remove('loginOff');
    this.line.nativeElement.classList.remove('lineActive');
  }

  createUser(){
    const user = {
      name: this.nombre,
      email: this.email,
      password: this.password,
      dni: this.dni
    };
    this.UserService.createUser(user)
    .subscribe((newUser)=>{
      // console.log(newUser);
      let usuarioArray = JSON.stringify(newUser);
      localStorage.setItem("usuarioActualClinica", usuarioArray);
      this._router.navigate(['/clinica']);
    });
  }
  getUser(){
    const user = {
      email: this.emailL,
      password: this.passwordL
    };
    this.UserService.getUser(user)
    .subscribe((newUser)=>{
      // console.log(newUser);
      let usuarioArray = JSON.stringify(newUser);
      // let usuarioArrayJson = JSON.parse(usuarioArray);
      localStorage.setItem("usuarioActualClinica", usuarioArray);
      this._router.navigate(['/clinica']);
    });
  }

  faUserAlt = faUserAlt;
  faLock = faLock;
  faTimes = faTimes;
}
