import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {
  courseId:number;
  course;
  flag:boolean=false;
  num=1;
  change(e){
    // console.log(e);
    this.num=e.target.value;
  }
  date=new Date();

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId)
    // .pipe(map(data=>{
    //   data.name='haha';
    //   return data;
    // })).pipe(filter(data=>{
    //   return data.id==3;
    // }))
    .subscribe(data=>{
      // console.log(data);
      this.course=data;
    });

    // this.course=this.http.get('/api/courses/'+this.courseId);
  }
  
}
