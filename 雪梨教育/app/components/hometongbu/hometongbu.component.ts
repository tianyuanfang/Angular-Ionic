import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hometongbu',
  templateUrl: './hometongbu.component.html',
  styleUrls: ['./hometongbu.component.css']
})
export class HometongbuComponent implements OnInit {
  courses;

  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    });
  }

}
