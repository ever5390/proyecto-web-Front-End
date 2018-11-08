import { Component, OnInit } from '@angular/core';
import { ProductosServices } from '../../services/productos/productos.services';
import { PorductoModel } from '../../entities/producto/productos.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.css'],
    providers: [ProductosServices]
})
export class IngresoComponent implements OnInit {
    public titulo: string;
    public producto: PorductoModel;
    public filesToUpload;
    public resultUpload;

    constructor(
        private _productosServices: ProductosServices,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Ingreso de Productos';
        this.producto = new PorductoModel(0, '', '', 0, '');
    }

    ngOnInit() {

    }

    onSubmit() {
        console.log(this.producto);
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productosServices.makeFileRequest(GLOBAL._url + 'upload-file', [], this.filesToUpload )
                .then(
                    (result) => {
                        console.log(result);
                        this.resultUpload = result;
                        this.producto.imagen = this.resultUpload.filename;
                        this.saveProducto();
                    },
                     (error) => {
                        console.log(<any>error);
                     } );
            }
        }
    saveProducto() {
        this._productosServices.addProductos(this.producto)
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
    }

    fileChangesEvent( fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}
