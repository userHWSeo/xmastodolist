const API_KEY = "d2934929d6e37a95768e7b05536efd37"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `City : ${data.name}`;
        weather.innerText = `Weather : ${data.weather[0].main}`;
    });
}
function onGeoError(){
    arlert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

