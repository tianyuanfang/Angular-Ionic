import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//支持双向数据绑定
import {FormsModule} from '@angular/forms';

import { TodolistComponent } from './components/todolist/todolist.component';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

import { TdlparentComponent } from './components/tdlparent/tdlparent.component';
import { Tdlchild1Component } from './components/tdlchild1/tdlchild1.component';
import { Tdlchild2Component } from './components/tdlchild2/tdlchild2.component';
//服务
import { CommonService } from './services/common.service';
import { Common2Service } from './services/common2.service';
//路由；雪梨
import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { LeftComponent } from './components/left/left.component';
import { TaskComponent } from './components/task/task.component';
import { SaidComponent } from './components/said/said.component';
import { NoticeComponent } from './components/notice/notice.component';
//把路由整合成一个文件
import { AppRoutingModule } from './/app-routing.module';
//Http服务
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    TdlparentComponent,
    Tdlchild1Component,
    Tdlchild2Component,
    HeaderComponent,
    HomeComponent,    
    LeftComponent,
    TongbuComponent,
    TongbudetailComponent,
    TaskComponent,
    SaidComponent,
    NoticeComponent,
    CourseComponent,
    ShequComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:'home',component:HomeComponent,children:[
        {path:"",redirectTo:"task",pathMatch:"full"}        
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'task',component:TaskComponent},
      {path:'said',component:SaidComponent},
      {path:'notice',component:NoticeComponent},
      {path:'**',component:HomeComponent}//必须写到最后一个
    ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
