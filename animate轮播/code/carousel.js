var span=document.getElementsByTagName('span');
var img=document.getElementsByTagName('img');
var banner=document.getElementById('banner');
var btn_left=document.getElementsByClassName('btn_left')[0];
var btn_right=document.getElementsByClassName('btn_right')[0];
var index=0;
var timeId = null;

span[0].style.backgroundColor='red';
autoPlay();
//点击按钮
btn_left.onclick=function(){
    preImg();
}
btn_right.onclick=function(){
    nextImg();
}
//点击轮播点
for(var i=0;i<span.length;i++){
    (function(i){
        span[i].onclick=function(){
           banner.style.left = (parseInt(banner.style.left) +  (index-i) * 1200)+"px";
           index = i;
           showPoint();
        }
    })(i)
}

function showPoint(){
    for(var i=0;i<span.length;i++){
        span[i].style.backgroundColor='white'; 
    }
    span[index].style.backgroundColor='red'; 
}
function nextImg(){
    index<img.length-1?index++:index=0;
    showPoint();
    //console.log(banner.style.left);
    var newLeft;
    if(banner.style.left == '-4800px'){
        newLeft = 0;
    }else{
        newLeft = parseInt(banner.style.left)-1200;
    }
    banner.style.left = newLeft + "px";
    //console.log(newLeft);
}
function preImg(){
    index<img.length-1?index--:index=0;
    showPoint();
    //console.log(banner.style.left);
    var newLeft;
    if(banner.style.left == '4800px'){
        newLeft = 0;
    }else{
        newLeft = parseInt(banner.style.left)+1200;
    }
    banner.style.left = newLeft + "px";
    //console.log(newLeft);
}
function autoPlay () {
    timeId = setInterval(function () {
        nextImg();
    },2000);
}
