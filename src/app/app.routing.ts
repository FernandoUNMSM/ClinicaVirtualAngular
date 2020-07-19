import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { MenuComponent } from './menu/menu.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ZoomComponent } from './zoom/zoom.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'doctores', component: DoctoresComponent},
  {path:'clinica', component: ClinicaComponent},
  {path:'formulario', component: FormularioComponent},
  {path:'consulta', component: ZoomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);