import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';

const URL_CUSTOMERS = 'app/customers.json';

@Injectable()
export class CustomerService {
    constructor(private _http: Http) {}

    getCustomers() {
        return this._http.get(URL_CUSTOMERS)
            .map((response: Response) => response.json())
            .catch(CustomerService._handleError);
    }

    static _handleError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }
}