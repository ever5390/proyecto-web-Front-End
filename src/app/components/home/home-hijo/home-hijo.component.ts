import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-hijo-home',
    template: `
        <div>
            <h3>{{titulo}}</h3>
            <p>SIN ALIAS: @Input(){{parametro_recibido}}</p>
            <p>CON ALIAS: @Input('param_2'){{variable}}</p>
            <p><strong>tambien se puede recibir objetos</strong></p>
            <ul>
                <li>{{objetoRecibido.nombre}}</li>
                <li>{{objetoRecibido.edad}}</li>
            </ul>
            <button (click)= "enviar()">Enviar de hijo a padre</button>
        </div>
    `
})
export class HomeHijoComponent implements OnInit {

    public titulo: string;
    public parametro_recibido: string;
    @Input() param_1: string;
    @Input('param_2') variable: string;
    @Input('param_3') objetoRecibido : any;

    @Output() paramOutput = new EventEmitter;
    constructor() {
        this.titulo = 'componente Hijo';
    }

    ngOnInit() {
        this.parametro_recibido = this.param_1;
    }

    enviar() {
        this.paramOutput.emit({nombre: 'enviado de hijo a padre'});
    }
}
