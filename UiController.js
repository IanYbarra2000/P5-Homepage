class UiController {
    constructor() {

    }
    changeTime(hour,minute,second,half){
        document.getElementById('clock').innerHTML=hour+":"+minute+":"+second+' '+half;
    }
    changeWeatherIcon(id) {
        switch(true){
            case (id<600):
                //add thunder/rain code
                document.getElementById('rainy').classList.add('display-override');
                console.log('thunder/rain');
                break;
            case (id<700):
                //add snow code
                document.getElementById('snowy').classList.add('display-override');
                console.log('snow');
                break;
            case (id===800):
                //add clear/sunny code
                document.getElementById('sunny').classList.add('display-override');
                console.log('sun');
                break;
            case (id<805):
                //add cloud code
                document.getElementById('cloudy').classList.add('display-override');
                console.log('cloudy');
                break;
        }
    }
}