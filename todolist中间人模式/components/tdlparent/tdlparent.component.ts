import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-tdlparent',
  templateUrl: './tdlparent.component.html',
  styleUrls: ['./tdlparent.component.css']
})
export class TdlparentComponent implements OnInit {
  arrp=[];
  todo;
  add1(arr){
    this.arrp=arr;   
    this.local.set('todo',JSON.stringify(arr));
  }
  
  constructor(private local:CommonService) {

   }
  ngOnInit() {
    this.todo=JSON.parse(this.local.get('todo'));
    if(this.todo){
      this.arrp=this.todo; 
      console.log("par",this.arrp);
    }else{
      this.local.set('todo',JSON.stringify([]));
      this.local.set('num','0');
    }
  }  
}
