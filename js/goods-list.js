var oGoods=document.getElementsByClassName('goods-list')[0];
var oLeft=document.getElementById('left');
var oRight=document.getElementById('right');
oLeft.style.color='#e0e0e0';
oLeft.style.cursor='default';
var timer;
oLeft.onclick=function () {

    startmove(oGoods,0,124);
    this.style.color='#e0e0e0';
    this.style.cursor='default';
    oRight.style.color='#b0b0b0';
    oRight.style.cursor='cursor';
}

oRight.onclick=function () {
    startmove(oGoods,-1240,-124);
    this.style.color='#e0e0e0';
    this.style.cursor='default';
    oLeft.style.color='#b0b0b0';
    oLeft.style.cursor='cursor';
}
oLeft.onmouseover=oRight.onmouseover=function () {
    if(this.style.color=='#e0e0e0')
    {
        this.style.color='#ff6700';
    }
}
function startmove(oGoods,target,speed) {
    clearInterval(timer);
    timer=setInterval(function () {
        if(oGoods.offsetLeft==target){
            clearInterval(timer);
        }
        else {
            oGoods.style.marginLeft = oGoods.offsetLeft + speed + 'px';
            if (oGoods.offsetLeft == target) {
                clearInterval(timer);
            }
        }
    },100);
}

setInterval(function () {
    oRight.onclick()
},4000);
setInterval(function () {
    oLeft.onclick()
},8000);
/**
 * Created by lenovo on 2017/10/28.
 */
