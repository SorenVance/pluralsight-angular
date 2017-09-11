import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const URL_CUSTOMERS = 'app/customers.json';

@Injectable()
export class CustomerService {
    constructor(private _http: Http) {}

    getCustomers() {
        return this._http.get(URL_CUSTOMERS)
            .map((response: Response) => response.json());
    }
}