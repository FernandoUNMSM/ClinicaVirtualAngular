import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctoresComponent } from './doctores/doctores.component';
import { MenuComponent } from './menu/menu.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ZoomComponent } from './zoom/zoom.component';
import { DateInfoComponent } from './date-info/date-info.component';
import { DateComponent } from './date/date.component'
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DoctoresComponent,
    MenuComponent,
    ClinicaComponent,
    FormularioComponent,
    ZoomComponent,
    DateInfoComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
