import { Injectable } from '@angular/core'

@Injectable()
export class CustomerService {
    constructor() {}

    static getCustomers() {
        return [
            {id: 1, name: 'Steve'},
            {id: 2, name: 'Sergio'},
            {id: 3, name: 'JC'}
        ];
    }
}