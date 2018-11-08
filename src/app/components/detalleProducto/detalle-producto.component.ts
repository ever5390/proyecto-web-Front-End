import { Component, OnInit } from '@angular/core';
import { ProductosServices } from '../../services/productos/productos.services';
import { PorductoModel } from '../../entities/producto/productos.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'app-detalleprod',
    templateUrl: './detalle-producto.component.html',
    // styleUrls: [],
    providers: [ProductosServices]
})
export class DetalleProductoComponent implements OnInit {
    public producto: PorductoModel;

    constructor(
        private _productoServices: ProductosServices,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.producto = new PorductoModel(null, '', '', null, '');
    }

    ngOnInit() {
        console.log('detalle');
        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            const id = params['id'];
            this._productoServices.getProductosId(id).subscribe(
                response => {
                    if (response.code === 200) {
                        this.producto = response.data;
                    } else {
                        this._router.navigate(['/ingreso']);
                    }
                }
                ,
                error => {
                    console.log(<any>error);
                }
            );
        });
    }
}
