


const weather = document.querySelector(".js-weather");
const API_KEY = "8de95803fdc3143ef7661bf0e79dbf98";
const COORDS = "coords";


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
       
        const temperature = json.main.temp;
        const place = json.name;
        const weatherApi = json.weather[0].main;
        
        weather.innerText = 
        `${place} 
        ${weatherApi} 
        ${temperature} ℃`;
    });
}




function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { 
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log(`Can't access geo location`);

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}



function loadWeather(){
    
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        
        weather.classList.add(HIDE);
        
    } else {
        weather.classList.add(SHOW);
    
    }
}



function init(){
    loadCoords();
    loadWeather();
}


init();