// 자바스크립트 경로는 css 다르다 연결된 html 기준으로 처리해야한다.

let count  = 0;
setInterval(function(){
    count++;
    count %= 5;
    document.querySelector("#bannerimg").setAttribute("src",`./banner/${count}.png`)
}, 1000);



//$("#bannerimg").attr("src","/banner/1.png")