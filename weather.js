class weather {
    constructor(){
        if(window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(this.successfulLookup,console.log);
        }
    }
    successfulLookup = position => {
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        const controller = new UiController();
        const key='c3839408e671b7777dd165db5d78ee7c';
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            controller.changeWeatherIcon(this.determineWeather(data));
            return data;
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    determineWeather(data) {
        console.log(data);
        const weatherID = data.weather[0].id;
        return weatherID;
    }
    determineSuntimes(data){
        console.log(data.sys.sunset);
        const sunRise= new Date(data.sys.sunrise*1000);
        const sunSet=new Date(data.sys.sunset*1000);
        return [sunRise,sunSet];
    }
}
const w=new weather();
