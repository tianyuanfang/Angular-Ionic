import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { LogService } from './log.service';

@Injectable({//是否可注入其他服务
  providedIn: 'root'
})
export class Common2Service implements CommonService{
  set(key,value){
    this.log.log('set方法调用了');//this.log是类属性，调用log方法
    localStorage.setItem(key,value);
  }
  get(key){
    this.log.log('get方法调用了');
    return localStorage.getItem(key);
  }  

  constructor(private log:LogService) { }
}
