import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // arr = [];
  // fin =[];
  // txt:string;
  // add(e){
  //   if(e.keyCode==13){
  //     if(this.txt===""){
  //       alert("请填写任务");
  //     }
  //     else{
  //       this.arr.push(this.txt);
  //       this.txt="";
  //     }
  //  }
  // };  
  // del(i){
  //   this.arr.splice(i,1);
  // }
  // finish(i) {
  //   this.fin.push(this.arr.splice(i,1));
  // }
  // del2(i){
  //   this.fin.splice(i,1);
  // }
  // todo(i){
  //   this.arr.push(this.fin.splice(i,1));
  // }


  txt:string;
  arr:Msg[]=[];
  num:number=0;
  add(e){
      if(e.keyCode==13){
        if(this.txt===""){
          alert("请填写任务");
        }
        else{
          this.arr.push(new Msg(this.txt,false));
          this.txt="";
        }
      }
      this.count();
  }; 
  count(){
    this.num=0;
    this.arr.forEach((value,index)=>{
     if(value.done){
        this.num++;
       }
    });
  } 
  del(i){
    this.arr.splice(i,1); 
    this.count();     
  }
  change(i) {
    this.arr[i].done=!this.arr[i].done;   
    this.count();     
  }      
}
export class Msg{
  constructor(public title:string,public done:boolean){

  }
}

