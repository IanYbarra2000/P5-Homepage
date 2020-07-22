

const successfulLookup = position => {
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const controller = new UiController();
    const key='c3839408e671b7777dd165db5d78ee7c';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((weatherData) => {
        controller.changeWeatherIcon(determineWeather(weatherData));
    })
    .catch((error) =>{
        console.log(error);
    })
}
function determineWeather(data) {
    const weatherID = data.weather[0].id;
    return weatherID;
}
if(window.navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition(successfulLookup,console.log);
}
