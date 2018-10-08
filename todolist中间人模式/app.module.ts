import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { TdlparentComponent } from './components/tdlparent/tdlparent.component';
import { Tdlchild1Component } from './components/tdlchild1/tdlchild1.component';
import { Tdlchild2Component } from './components/tdlchild2/tdlchild2.component';
import { CommonService } from './services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    TdlparentComponent,
    Tdlchild1Component,
    Tdlchild2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
