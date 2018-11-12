import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  flag={
    release:true,
    star:false,
    eye:false
  };
  change(val){
    for(var i in this.flag){
      // console.log(i,this.flag[i]);
      if(i==val){
        this.flag[i]=true;
      }else{
        this.flag[i]=false;
      }
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyPage');
  }

}
