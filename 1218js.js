

let imgsArea = document.querySelector('.imgs_area');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let btns = document.querySelectorAll('.btns');
let btnCount = btns.length;

currentImg=1;

nextBtn.addEventListener('click',activateNext);
prevBtn.addEventListener('click',activatePrev);


btns[0].onclick=function(){
    imgsArea.style.background=`url(/img/${1}.jpg)`
}

btns[1].onclick=function(){
    imgsArea.style.background=`url(/img/${2}.jpg)`
}

btns[2].onclick=function(){
    imgsArea.style.background=`url(/img/${3}.jpg)`
}



function activateNext(){
    currentImg++;
    changeImg(currentImg);
    if(currentImg==3){currentImg=0};
}

function activatePrev(){
    currentImg--;
    if(currentImg===-1 || currentImg===0){currentImg=3};
    changeImg(currentImg);
}

function changeImg(number){
    imgsArea.style.background=`url(/img/${number}.jpg)`
}


