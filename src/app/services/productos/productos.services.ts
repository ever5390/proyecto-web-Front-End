import { Injectable } from '@angular/core';
// librerias para usar http, observable
import { Http, Response, Headers, XHRBackend } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

// componentes a utilizar
import { PorductoModel } from '../../entities/producto/productos.model';
import { GLOBAL } from '../global';

@Injectable()
export class ProductosServices {

    public url: string;

    constructor(
       public _http: Http
    ) {
        this.url = GLOBAL._url;
    }

    getProductos() {
        return this._http.get(this.url + 'productos')
            .map( res => res.json());
    }

    addProductos(producto: PorductoModel) {
        const json = JSON.stringify(producto);
        const params = 'json=' + json;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'productos', params, {headers: headers}).map(res => res.json());
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            const formData: any = new FormData();
            const xhr = new XMLHttpRequest();

            for ( let i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 ) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });

    }
}
