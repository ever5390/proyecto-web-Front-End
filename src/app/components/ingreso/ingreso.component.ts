import { Component, OnInit } from '@angular/core';
import { ProductosServices } from '../../services/productos/productos.services';
import { PorductoModel } from '../../entities/producto/productos.model';

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.css'],
    providers: [ProductosServices]
})
export class IngresoComponent implements OnInit {
    public titulo: string;
    public producto: PorductoModel;

    constructor(
        private _productosServices: ProductosServices
    ) {
        this.titulo = 'Ingreso de Productos';
        this.producto = new PorductoModel(0, '', '', 0, '');
    }

    ngOnInit() {

    }

    guardar() {
        console.log(this.producto);
    }
}
