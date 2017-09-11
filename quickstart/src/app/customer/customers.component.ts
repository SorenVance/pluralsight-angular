import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers = [
        {id: 1, name: 'Steve'},
        {id: 2, name: 'Sergio'},
        {id: 3, name: 'JC'}
    ];

    constructor() {}
    ngOnInit() {}
}