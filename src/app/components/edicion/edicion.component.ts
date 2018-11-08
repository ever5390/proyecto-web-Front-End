import { Component, OnInit } from '@angular/core';
import { ProductosServices } from '../../services/productos/productos.services';
import { PorductoModel } from '../../entities/producto/productos.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'app-edicion',
    templateUrl: '../ingreso/ingreso.component.html',
    // templateUrl: '/edicion.component.html',
    providers: [ProductosServices]
})
export class EdicionComponent implements OnInit {
    public titulo: string;
    public producto: PorductoModel;
    public filesToUpload;
    public resultUpload;
    public edicion: boolean;

    constructor(
        private _productosServices: ProductosServices,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Edición de Productos';
        this.producto = new PorductoModel(0, '', '', 0, '');
        this.edicion = true;
    }

    ngOnInit() {
        this.titulo = 'Editar Producto';
        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            const id = params['id'];
            this._productosServices.getProductosId(id).subscribe(
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

    onSubmit() {
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
                this._productosServices.makeFileRequest(GLOBAL._url + 'upload-file', [], this.filesToUpload )
                .then(
                    (result) => {
                        console.log(result);
                        this.resultUpload = result;
                        this.producto.imagen = this.resultUpload.filename;
                        console.log( this.producto.imagen );
                        this.editProducto();
                    },
                    (error) => {
                        console.log(<any>error);
                    }
                );
        } else {
            this.editProducto();
        }
    }

    editProducto() {

        this._route.params.forEach((params: Params) => {
            const id = params['id'];
            this._productosServices.updateProducto(id, this.producto)
                .subscribe(
                    response => {
                            if  (response.code === 200) {
                                this._router.navigate(['/listado']);
                            } else {
                                console.log(response);
                            }
                    }
                    ,
                    error => {
                            console.log(<any>error);
                    }
                );
        });
    }

    fileChangesEvent( fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}
