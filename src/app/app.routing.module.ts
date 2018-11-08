import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { DetalleProductoComponent } from './components/detalleProducto/detalle-producto.component';
import { EdicionComponent } from './components/edicion/edicion.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'listado', component: ListadoComponent},
  { path: 'ingreso', component: IngresoComponent},
  { path: 'detalle/:id', component: DetalleProductoComponent},
  { path: 'edicion/:id', component: EdicionComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
