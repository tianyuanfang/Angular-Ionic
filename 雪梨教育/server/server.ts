import express from 'express';//这种写法会 load 模块, 但不引入任何内容, 即 express 中的代码会被执行一次.
//解析post的body
import bodyParser from 'body-parser';

const app=express();
app.use(bodyParser.json());

export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number){

    }
}
export class ClassCourse{
    constructor(
        public id:number,
        public name:string,
        public images:string,
        public txt:string,
        public time:number,
        public num:number){

    }
}
export class Shequ{
    constructor(
        public id:number,
        public avatar:string,
        public img:string,
        public title:string,
        public txt:string,
        public name:string,
        public time:string,
        public read:number,
        public comment:number){

    }
}
export class Topic{
    constructor(
        public id:number,
        public topic:string,
        public num:string){

    }
}
export class CourseDetail{
    constructor(
        public id:number,
        public url:string ){
    }
}

const courses=[
    new Course(1,'javascript','http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(2,'混合应用','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',
    23,100),
    new Course(3,'测试','http://usercontent.edu2act.cn/media/team/17-09-15/FNYZkc7RjwRSy8aonG8AGo.jpg?imageView2/1/w/230/h/130',
    15,97),
    new Course(4,'计算机导论','http://usercontent.edu2act.cn/media/team/16-09-26/9ii2UeSY39da43Du6WU5MA.jpg?imageView2/1/w/230/h/130',
    30,99),
];
const classCourse=[
    new ClassCourse(1,'Github开源之旅','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',
    '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',
    14,3734),
    new ClassCourse(2,'CSS3','http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190',
    'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性',12,2315),
    new ClassCourse(3,'HTML5基础','http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190',
    'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',
    12,1310),
    new ClassCourse(4,'Selenium IDE WEB自动化测试','http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190',
    '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。'+
    '中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。'+
    '下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。',
    13,3793),

];
const shequ=[
    new Shequ(1,'http://www.edu2act.cn/static/img/m.png','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
    'WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加',
    '刘秀梅','2018-10-11 15:10',459,2),
    new Shequ(2,'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
    '数据结构——线性表的经典应用','1. 一元多项式的表示和相加在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，在计算机中，可用一个线性表P来表示：',
    '杨伟斌','2018-10-08 14:28',27,0),
    new Shequ(3,'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/RWcUSnA6qeiKBmf5KK96K9.jpg',
    'JavaScript event（事件对象）','在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致',
    '刘孟祎','2018-09-28 09:40',43,0),
    new Shequ(4,'http://usercontent.edu2act.cn/media/userheader/16-11-10/jut8pNbf66NgrWMdGPWejD.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/4cQyhZvxEuX2RFjQUx3waR.jpg',
    'JavaScript中事件的绑定','一、事件是您在编程时系统内的发生的动作或者发生的事情，系统通过它来告诉您在您愿意的情况下您可以以某种方式对它做出回应。在Web中,事件在浏览器窗口中被触发并且通常被绑定到窗口内部的特定部分——可能',
    '陶卓','2018-09-26 15:59',77,0),    
];
const topic=[
    new Topic(1,'#2015级程序设计基础：C语言#','6万'),
    new Topic(2,'#2015级面向对象程序设计(C++)#','3万'),
    new Topic(3,'#cms与模板制作#','3万'),
    new Topic(4,'#数据结构#','3万'),
    new Topic(5,'#数据库原理（5.6.7.8班）#','2万'),
    new Topic(6,'#2014级PHP程序设计#','2万'),
    new Topic(7,'#Web开发（二）2015级3、4班#','1万'),
    new Topic(8,'#数据库系统概论 2014级1、2班#','1万'),
    new Topic(9,'#Web开发（二）2015级5、6班#','1万'),
    new Topic(10,'#web开发（一）2015级7、8班#','1万'),
];
const coursedetail=[
    new CourseDetail(1,'http://www.edu2act.cn/course/Github-kai-yuan-zhi-lv-shi-pin-ke-cheng-di-yi-ji-q/kcsms/'),
    new CourseDetail(2,'http://www.edu2act.cn/course/CSS3-ji-chu/CSS3bk/'),
    new CourseDetail(3,'http://www.edu2act.cn/course/HTML5-ji-chu/dlwzdw/'),
    new CourseDetail(4,'http://www.edu2act.cn/course/SeleniumIDEWEB-zi-dong-hua-ce-shi-ru-men-shi-pin-1/cqqh/'),
];

app.get('/',(req,res)=>{//类似于路由中path
	res.json(courses);
});
app.get('/api/courses',(req,res)=>{
	res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    //req.params;//请求的参数
	res.json(courses.find(ele=>ele.id==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.get('/api/course',(req,res)=>{
    res.json(classCourse);
});
app.get('/api/course/:id',(req,res)=>{
    res.json(coursedetail.find(ele=>ele.id==req.params.id));
});
app.get('/api/shequ',(req,res)=>{
    res.json(shequ);    
});
app.get('/api/shequ2',(req,res)=>{
    res.json(topic);    
});
app.get('/api/shequ/:id',(req,res)=>{
    res.json(shequ.find(ele=>ele.id==req.params.id));
});
app.listen(8000);
