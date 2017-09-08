import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
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