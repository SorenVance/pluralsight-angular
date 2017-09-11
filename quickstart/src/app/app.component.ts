import {Component} from '@angular/core';

import { HttpModule } from '@angular/http';

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [HttpModule]
})
export class AppComponent  {
    //[] = property binding - Component to Dom
    //() = event binding - Dom to Component
    //[()] = Circular Component to Dom to Component
    title = 'Angular';
    name = 'Steve';
    myColor = 'red';

    changeColor() {
        this.myColor = this.myColor === 'blue' ? 'red' : 'blue';
    };
}
