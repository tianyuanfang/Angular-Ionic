import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;//我们可以使用ViewChild将Slides实例分配给您的slides属性。
  //父组件要想获取子组件，父组件的html在使用子组件的标签时，必须加上#名称，
  //而名称即为@ViewChild('')括号中的参数
  change(){
    console.log(this.slides.getActiveIndex());
  }
  tap(){
    console.log('click',this.slides.getActiveIndex());
  }

  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad(){
    // console.log(this.slides.getActiveIndex());
  }
}
