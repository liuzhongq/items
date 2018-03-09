/**
 * Created by lenovo on 2017/10/28.
 */
var oTab = document.getElementById('tab');
var aLi = oTab.getElementsByTagName('li');
var oContent = document.getElementById('content');
var aImg = oContent.getElementsByTagName('img');
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');
var oArrow = document.getElementById('arrow');

var iIndex = 0;//一个变量用来表示当前正在显示的图片索引
var zIndex = 4;

for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        iIndex = this.index;//保存最新的索引
        changeImg();
    };
}

oPrev.onclick = oNext.onclick = function () {
    if (this === oPrev) {
        iIndex--;
        if (iIndex == -1) {
            iIndex = aImg.length - 1;
        }
    } else {
        iIndex++;
        if (iIndex == aImg.length) {
            iIndex = 0;
        }
    }
    changeImg();
};

oPrev.onselectstart = oNext.onselectstart = function(){
    return false;//阻止默认行为
};

function changeImg() {
    //改变li的背景颜色
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].className = '';
    }
    aLi[iIndex].className = 'selected';

    //淡入淡出图片
    aImg[iIndex].style.opacity = 0;

    for(var i=0;i<aLi.length;i++){
        aImg[i].style.zIndex=0;
    }
    aImg[iIndex].style.zIndex =zIndex;
    oTab.style.zIndex = zIndex+1;
    oArrow.style.zIndex = zIndex+1;
    animate(aImg[iIndex], {
        opacity: 100
    });
}

setInterval(function () {
    oNext.onclick();
},4000);