import { Component } from '@angular/core';

/**
 * Generated class for the HliveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hlive',
  templateUrl: 'hlive.html'
})
export class HliveComponent {

  text: string;

  constructor() {
    // console.log('Hello HliveComponent Component');
    this.text = 'Hello World';
  }

}
