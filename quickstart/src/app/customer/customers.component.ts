import {Component, OnInit} from '@angular/core';
import {CustomerService} from "./customer.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) {}

    ngOnInit() {
        this.customers = this._customerService.getCustomers()
            .catch((err) => {
            console.log(err);
            return Observable.of([true]);
        });
    }
}
