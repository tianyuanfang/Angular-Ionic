import { Component, OnInit } from '@angular/core';
//引入Http服务;post请求
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timer=null;
  course;
  headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(private http:HttpClient) { } 
  ngOnInit() {
    //获取，查询
    // this.http.get('/api/courses/1').subscribe(data=>{
    //   this.course=data;
    //   console.log(data);
    // });

    //获取；私密；提交
    this.http.post('/api',{name:'tyf',pwd:123},{headers:this.headers}).subscribe(data=>{
      //this.course=data;    
      console.log(data);
    });

    // this.timer=setInterval(()=>{
    //   console.log('home');
    // },1000);
  }
  ngOnDestroy(){
    // clearInterval(this.timer);
  }
}
