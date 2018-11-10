import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app/app.routing.module';

import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { DetalleProductoComponent } from './components/detalleProducto/detalle-producto.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { HomeHijoComponent } from './components/home/home-hijo/home-hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoComponent,
    IngresoComponent,
    DetalleProductoComponent,
    EdicionComponent,
    HomeHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
