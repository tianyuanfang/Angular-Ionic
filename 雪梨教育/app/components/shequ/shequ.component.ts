import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {
  shequ;
  topic;
  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  ngOnInit() {
    // console.log(this.router.snapshot.queryParams['id']);//查询参数时使用
    // console.log(this.router.snapshot.queryParams['name']);

    this.http.get('/api/shequ').subscribe((data)=>{
      this.shequ=data;
    });
    this.http.get('/api/shequ2').subscribe((data)=>{
      this.topic=data;
    });
  }
}
