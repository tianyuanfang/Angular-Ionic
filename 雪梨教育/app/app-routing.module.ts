import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';


@NgModule({
  imports: [
    CommonModule,RouterModule,
  ],
  declarations: [HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent]
})
export class AppRoutingModule { 
  
}
