import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("login") login:ElementRef;
  @ViewChild("registro") registro:ElementRef;
  @ViewChild("line") line:ElementRef;
  constructor(private elem: ElementRef) { 
    
  }

  ngOnInit(): void {
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
}
