import { NgModule } from '@angular/core';
import { A1Component } from './a1/a1';
import { B1Component } from './b1/b1';
import { BrowserModule } from '@angular/platform-browser';//模块
import {  IonicModule } from 'ionic-angular';
import { HcommendComponent } from './hcommend/hcommend';
import { HliveComponent } from './hlive/hlive';
@NgModule({
    declarations: [
        A1Component,
        B1Component,
    HcommendComponent,
    HliveComponent],
    imports: [BrowserModule,
        IonicModule.forRoot(ComponentsModule)],
    exports: [
        A1Component,
        B1Component,
    HcommendComponent,
    HliveComponent]
})
export class ComponentsModule { }
