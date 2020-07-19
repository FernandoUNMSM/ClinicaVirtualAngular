import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routing, appRoutingProviders } from './app.routing';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctoresComponent } from './doctores/doctores.component';
import { MenuComponent } from './menu/menu.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ZoomComponent } from './zoom/zoom.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DoctoresComponent,
    MenuComponent,
    ClinicaComponent,
    FormularioComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    routing,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [
    appRoutingProviders,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
