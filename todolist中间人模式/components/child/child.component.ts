import { Component, OnInit, Input, Output,EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //首先执行--------------------------------------------------------
  // first=(function(){
  //   console.log("first");
  // })();
  @Input() arr;
  @Input() arr1;
  @Output() delIndex=new EventEmitter<number>();
  del(i){
    this.delIndex.emit(i);//向父组件传递数据
  }
  num=0;
  msg:string;
  log(msg){
    console.log(`这是第${this.num++}次调用,调用的钩子函数是${msg}`);
  }  
  // end=(function(){
  //   console.log("end");
  // })();
  //---------------------------------------------------------------
  constructor() { 
    // console.log('num',this.num);
    // this.log("constructor");
     
    // console.log(this.arr,"constructor");
  } 
  // ngOnChanges(changes:SimpleChanges){//输入属性地址改变时触发
  //   this.log("ngOnChanges");
  //   console.log(changes);
  //   for(let item in changes){
  //     console.log(changes[item].currentValue);
  //     // for(let i in changes[item]){
  //     //   console.log(`属性名是${i},属性值是${changes[item][i]}`);
  //     // }
  //   }
  // }
  ngOnInit() {
    //this.msg="message";
    //this.log("ngOnInit");
    // console.log(this.arr,"ngOnInit");
    // this.msg="msg";
  }
  // ngDoCheck(){//有一点改变就触发
  //   this.log("ngDoCheck");
  // }
  // ngAfterContentInit(){//解析父组件代码，对应子组件中<ng-content></ng-content>内容
  //   this.log("ngAfterContentInit");
  // }
  // ngAfterContentChecked(){
  //   this.log("ngAfterContentChecked");
  // }  
  // ngAfterViewInit(){//解析子组件代码，除去子组件中<ng-content></ng-content>内容
  //   setTimeout(()=>{
  //     this.msg="message";
  //   },0);
  //   this.log("ngAfterViewInit");
  // }
  // ngAfterViewChecked(){
  //   this.log("ngAfterViewChecked");
  // }  
}
