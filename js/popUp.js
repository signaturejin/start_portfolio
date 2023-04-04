// pc버전 옵션
let pcOption = "width=1920px, height=1080px, resizable=no";
// 타블렛 버전 옵션
let tabletOption = "width=1024px, height=768px, top=100px, left=300px, resizable=no";
// 모바일 버전 옵션
let mobileOption = "width=420px, height=740px, top=100px, left=500px, resizable=no";

// 링크 변수
let pfLink1 = "https://portfolio1-382709.et.r.appspot.com/";
let pfLink2 = "https://portfolio2-382709.et.r.appspot.com/";
let pfLink3 = "https://portfolio3-382709.et.r.appspot.com/";

let lotteLink = "https://superb-muffin-ee3d49.netlify.app/";

// 동글투어
let pcPopup1 = ()=>{
    window.open(pfLink1,"_blank", pcOption);
}
let tabletPopup1 = ()=>{
    window.open(pfLink1, tabletOption);
}
let mobilePopup1 = ()=>{
    window.open(pfLink1,"_blank", mobileOption);
}

// ANYTHING
let pcPopup2 = ()=>{
    window.open(pfLink2,"_blank", pcOption);
}
let tabletPopup2 = ()=>{
    window.open(pfLink2,"_blank", tabletOption);
}
let mobilePopup2 = ()=>{
    window.open(pfLink2,"_blank", mobileOption);
}

// PBANK
let pcPopup3 = ()=>{
    window.open(pfLink3,"_blank", pcOption);
}
let tabletPopup3 = ()=>{
    window.open(pfLink3,"_blank", tabletOption);
}
let mobilePopup3 = ()=>{
    window.open(pfLink3,"_blank", mobileOption);
}

// 롯데월드
let pcPopup4 = ()=>{
    window.open(lotteLink,"_blank", pcOption);
}
let tabletPopup4 = ()=>{
    window.open(lotteLink,"_blank", "width=1200px, height=768px, top=100px, left=300px, resizable=no");
}
let mobilePopup4 = ()=>{
    window.open(lotteLink,"_blank", mobileOption);
}