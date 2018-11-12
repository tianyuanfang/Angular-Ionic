import { Component } from '@angular/core';

/**
 * Generated class for the HcommendComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hcommend',
  templateUrl: 'hcommend.html'
})
export class HcommendComponent {

  text: string;

  constructor() {
    // console.log('Hello HcommendComponent Component');
    this.text = 'Hello World';
  }

}
