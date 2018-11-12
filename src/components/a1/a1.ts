import { Component } from '@angular/core';

/**
 * Generated class for the A1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'a1',
  templateUrl: 'a1.html'
})
export class A1Component {
  text: string;
  flag=true;
  get(){
    console.log('a1组件的get方法');
  }

  constructor() {
    this.text = '这是A1组件';
  }

}
