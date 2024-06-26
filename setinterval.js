// 자바스크립트 경로는 css 다르다 연결된 html 기준으로 처리해야한다.

// let count  = 0;
// setInterval(function(){
//     count++;
//     count %= 5;
//     document.querySelector("#bannerimg").setAttribute("src",`./banner/${count}.png`)
// }, 1000);

//$("#bannerimg").attr("src","/banner/1.png")
// ------------------------------------------------------------------------------------------------ //


// play, stop 버튼 추가
// const bannerdata = [
//     "./banner2/1.png",
//     "./banner/0.png",
//     "./banner2/membership.png"
// ];

// let num = 0;
// document.querySelector("#bannerimg").setAttribute("src",bannerdata[num])

// document.querySelector(".bannerwrap").style.background = `url(${bannerdata[num]}) center no-repeat`;

//     const autobanner = setInterval(function(){
//     num++;
//     num %= bannerdata.length;
//     document.querySelector(".bannerwrap").style.background = `url(${bannerdata[num]}) center no-repeat`;
//     document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) 
// }, 3000)


// document.querySelector(".bannerwrap button").addEventListener('click', function(){
//     clearInterval(autobanner);
//     this.innerHTML = "Play"
// });

// ---------------------------------------------------------------------------------------- //


// setinterval 최적화 버전

const bannerData = [
    "./banner2/1.png",
    "./banner/0.png",
    "./banner2/membership.png"
];

let num = 0;

const bannerWrap = document.querySelector(".bannerwrap");
const bannerImg = document.querySelector("#bannerimg");
const bannerButton = document.querySelector(".bannerwrap button");

function updateBanner() {
    bannerWrap.style.background = `url(${bannerData[num]}) center no-repeat`;
    bannerImg.setAttribute("src", bannerData[num]);
}

function startAutoBanner() {
    return setInterval(function() {
        num = (num + 1) % bannerData.length;
        updateBanner();
    }, 3000);
}

let autoBanner = startAutoBanner();

bannerButton.addEventListener('click', function() {
    clearInterval(autoBanner);
    bannerButton.innerHTML = "Play";
});

updateBanner(); // 초기 배너 설정
