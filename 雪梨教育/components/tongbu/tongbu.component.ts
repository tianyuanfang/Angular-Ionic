import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {
  courses;
  courseId:number;

  constructor(private http:HttpClient) {
    
  }
  ngOnInit(){
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    });
  }


  // courseId;
  // go(){
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000,name:'tongbu'}});//只要"/..."路径相同，就不会重新加载组件
  //   //{queryParams:{}})在URL中显示参数
  //   console.log(this.router.snapshot.queryParams['id']);
  // }
  // constructor(private router:ActivatedRoute,private route:Router) { }

  // ngOnInit() {//同一组件钩子函数只加载一遍，值就不会改变
  //   //this.courseId=this.router.snapshot.params['courseId'];//值固定不变
  //   this.router.params.subscribe((params)=>{//监听，实时变化->订阅者模式
  //     this.courseId=params['courseId'];
  //   });
  // }

}

