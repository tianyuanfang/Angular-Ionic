import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-tdlchild2',
  templateUrl: './tdlchild2.component.html',
  styleUrls: ['./tdlchild2.component.css']
})
export class Tdlchild2Component implements OnInit {
  num=0;
  todo;
  @Input() arrc2=[];
  count(){
    this.num=0;
    this.arrc2.forEach((value,index)=>{
     if(value.done){
        this.num++;
       }
    }); 
    this.local.set('num',this.num);  
  } 
  del(i){
    this.arrc2.splice(i,1);   
    this.local.set('todo',JSON.stringify(this.arrc2));
    this.count();
  }
  change(i){
    this.arrc2[i].done=!this.arrc2[i].done;    
    this.local.set('todo',JSON.stringify(this.arrc2));
    this.count();
  }

  constructor(private local:CommonService) { 
   
  }
  ngOnInit() {
    this.todo=JSON.parse(this.local.get('todo'));
    this.num=JSON.parse(this.local.get("num"));
    if(this.todo){
      this.arrc2=this.todo;
      //console.log("c2",this.arrc2);
    }else{
      this.local.set('todo',JSON.stringify([]));
      this.local.set('num','0');
    }
  }
}

