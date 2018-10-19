import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{
      this.courses=data;
    });
  }

}
