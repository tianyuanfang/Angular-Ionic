import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  courseId;
  course;
  courseName;
  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/course/'+this.courseId).subscribe(data=>{
      //console.log(data);
      this.course=data;
    })
    this.http.get('/api/course').subscribe(data=>{
      // console.log(data);
      // console.log(Object.values(data));
      this.courseName=Object.values(data).find(ele=>ele.id==this.courseId);
      // console.log(this.courseName);
    })
  }

}
