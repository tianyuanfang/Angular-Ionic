import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-tdlchild1',
  templateUrl: './tdlchild1.component.html',
  styleUrls: ['./tdlchild1.component.css']
})
export class Tdlchild1Component implements OnInit {
  todo;
  txtc1:string;
  arrc1=[];  
  @Output() addc1=new EventEmitter();
  add(){
    this.arrc1.push(new Msg(this.txtc1,false));
    this.txtc1="";    
    this.arrc1=this.todo;    
    this.addc1.emit(this.arrc1);
    console.log("add",this.arrc1);
  }

  constructor(private local:CommonService) { 

  }
  ngOnInit() {
    this.todo=JSON.parse(this.local.get('todo'));
    if(this.todo){
      this.arrc1=this.todo;
    }else{
      this.local.set('todo',JSON.stringify([]));
      this.local.set('num','0');
    }
  }
}
export class Msg{
  constructor(public title:string,public done:boolean){

  }
}