import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from "./customer.service";

@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(@Inject(CustomerService) private _customerService: CustomerService) {}

    ngOnInit() {
        this.customers = CustomerService.getCustomers();
    }
}