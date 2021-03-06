import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

    @Input() customer: {id: number, name: string};
    customerColor = 'green';
    ngOnInit() {}
}