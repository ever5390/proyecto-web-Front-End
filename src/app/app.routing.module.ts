import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'listado', component: ListadoComponent},
  { path: 'ingreso', component: IngresoComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
