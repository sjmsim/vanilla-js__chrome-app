
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-clock-text");



function getTime(){
//D-day시간
const xmasDay = new Date("2021-12-24:00:00:00+0900");

//현재 시간
const now = new Date();


//UTC 시간 계산
const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);

//UTC와 KST의 간격은 9시간
const KrGap = 9 * 60 * 60 * 1000;

//KST = UTC + 9시간(KrGap)
const krNow = new Date(utc + KrGap);


const nowMonth = now.getMonth();
const nowDays = now.getDate();
const nowHours = now.getHours();
const nowMinutes = now.getMinutes();
const nowSeconds = now.getSeconds();




clockTitle.innerText = `${
    nowHours < 10 ? `0${nowHours}` : nowHours
} : ${
    nowMinutes < 10 ? `0${nowMinutes}` : nowMinutes
} : ${
    nowSeconds < 10 ? `0${nowSeconds}` : nowSeconds
}`;

}


function loadClock(){
    
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        
        clockContainer.classList.add(HIDE);
        
    } else {
        clockContainer.classList.add(SHOW);
    
    }
}





function init(){
    getTime();
    setInterval(getTime, 1000)
    loadClock();

}

init();