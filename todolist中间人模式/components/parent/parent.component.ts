import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:CommonService) { //将服务注入组件类

  }  
  ngOnInit() {
    // setTimeout(()=>{
    //   this.data1=this.data;//data1地址改变为data地址
    // },3000);

    // setInterval(()=>{
    //   this.data1.push("e");//data1是个引用，地址没变
    // },1000);

    //this.local.set('name','tian');

    if(this.local.get('list')){
      this.data1=this.local.get('list').split(",");
      console.log(typeof this.local.get('list'));
    }else{
      this.data1=["a","b","c","d"];
    }
  }
 
  data=[1,2,3,4,5,6];
  data1=["a","b","c","d"];
  del(i){
    //console.log(i);
    this.data1.splice(i,1);
    this.local.set('list',this.data1);    
  }
}
