import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: []
})
export class HomeComponent implements OnInit {
    public titulo: string;

    constructor() {
        this.titulo = 'Web App Productos Angular 7, valido 2, 4, 5, 6, 7';
    }

    ngOnInit() {

    }
}
