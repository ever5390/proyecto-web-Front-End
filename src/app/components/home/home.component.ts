import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: []
})
export class HomeComponent implements OnInit {
    public titulo: string;
    public administrador: boolean;
    public parametroDePadre: string;
    public parametroDeHijo: any;
    public objeto: any;
    
    constructor() {
        this.titulo = 'Web App Productos Angular 7, valido 2, 4, 5, 6, 7';
        this.administrador = true;
        this.parametroDePadre = "parametro enviado del padre a hijo";
        this.objeto = { 'nombre':'Ever Rosales', 'edad':'28'};
    }

    ngOnInit() {

    }

    cambiar(valor: boolean){
        this.administrador = valor;
    }

    metodoRecibePadre(event) {
        this.parametroDeHijo = event.nombre;
        console.log(event.nombre);
    }
}
