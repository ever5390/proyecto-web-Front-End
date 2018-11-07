import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ProductosServices } from '../../services/productos/productos.services';
import { PorductoModel } from 'src/app/entities/producto/productos.model';
@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css'],
    providers: [ProductosServices]
})
export class ListadoComponent implements OnInit {
    public titulo: string;
    public productos: Array<PorductoModel>;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productosServices: ProductosServices
    ) {
        this.titulo = 'Listado Productos';
        this.productos = [];
    }

    ngOnInit() {
        this._productosServices.getProductos()
            .subscribe(
                result => {
                    this.productos = result.data;
                }
                ,
                error => {
                    console.log('error al recibir los productos' + <any>error);
                }

            );
    }
}
