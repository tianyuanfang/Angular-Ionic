import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides:Slides;//我们可以使用ViewChild将Slides实例分配给您的slides属性。
  //父组件要想获取子组件，父组件的html在使用子组件的标签时，必须加上#名称，
  //而名称即为@ViewChild('')括号中的参数
  nav='commend';
  flag={
    commend:true,
    live:false,
    kitchen:false,
    bed:false
  };
  @ViewChild('hcommend') hcommend;
  @ViewChild('hlive') hlive;
  val(val){
    this.nav=val;
    for(var i in this.flag){
      // console.log(i,this.flag[i]);
      if(i==val){
        this.flag[i]=true;
      }else{
        this.flag[i]=false;
      }
    }
  }

  // icons = "camera";
  // relationship = "friends"
  // items = [];
  // goSub() {
  //   this.navCtrl.push(RegisterPage);//跳转页面（堆栈方式：push,pop）
  // }
  // @ViewChild('a1') a1;
  // //父组件要想获取子组件，父组件的html在使用子组件的标签时，必须加上#名称，
  // //而名称即为@ViewChild('')括号中的参数

  // segmentChanged() {
  //   this.relationship = "enemies";
  // }
  // doInfinite(infiniteScroll) {
  //   this.http.get('/api/courses').subscribe(data => {
  //     console.log(data);
  //     infiniteScroll.complete();
  //   });

  //   // console.log('Begin async operation');
  //   // setTimeout(() => {
  //   //   for (let i = 0; i < 10; i++) {
  //   //     this.items.push(this.items.length);
  //   //   }
  //   //   console.log('Async operation has ended');
  //   //   infiniteScroll.complete();
  //   //   if(this.items.length>29){
  //   //     infiniteScroll.enable();//停止加载
  //   //   }
  //   // }, 500);
  // }
  // doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);
  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  ionViewDidLoad(){
    // this.a1.get();
  }
}
