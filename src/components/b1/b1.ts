import { Component } from '@angular/core';

/**
 * Generated class for the B1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'b1',
  templateUrl: 'b1.html'
})
export class B1Component {

  text: string;

  constructor() {
    console.log('Hello B1Component Component');
    this.text = 'Hello World';
  }

}
