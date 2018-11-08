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
    public accion_borrar: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productosServices: ProductosServices
    ) {
        this.titulo = 'Listado Productos';
        this.productos = [];
        this.accion_borrar = false;
    }

    ngOnInit() {
        this.getProductos();
    }

    getProductos() {
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

    verProducto(index: number) {
        this._productosServices.getProductosId(index)
            .subscribe(
                result => {
                    this.productos = result.data;
                    if  (result.code === 200) {
                        this._router.navigate(['/ingreso']);
                    } else {
                        console.log(result);
                    }
                }
                ,
                error => {
                    console.log('error al enviar los productos' + <any>error);
                }
            );
    }

    consultarborrar() {
        this.accion_borrar = true;
    }

    deleteProducto(index: number) {
        this._productosServices.deleteProductos(index).subscribe(
            result => {
                if (result.code === 200) {
                    this.getProductos();
                    console.log(result);
                } else {
                    console.log('error al borrar');
                }
            }
            ,
            error => {
                console.log(<any>error);
            }
        );
        this.accion_borrar = false;
    }
}
