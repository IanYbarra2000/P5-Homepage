class UiController {
    constructor() {

    }
    changeTime(month,day,dow,hour,minute,second,half){
        document.getElementById('clock').innerHTML=hour+":"+minute+":"+second+' '+half;
        this.changeDateImage(month,day);
        this.changeDoWImage(dow);
        this.changeToDImage(dow,hour,half);
    }
    changeDateImage(month,day){
        this.disableDateImage();
        document.getElementById(day.toString()).classList.add('display-override-day');
        switch(month){
            case 0:
                document.getElementById('jan').classList.add('display-override-month');
                break;
            case 1:
                document.getElementById('feb').classList.add('display-override-month');
                break;
            case 2:
                document.getElementById('mar').classList.add('display-override-month');
                break;
            case 3:
                document.getElementById('apr').classList.add('display-override-month');
                break;
            case 4:
                document.getElementById('may').classList.add('display-override-month');
                break;
            case 5:
                document.getElementById('jun').classList.add('display-override-month');
                break;
            case 6:
                document.getElementById('jul').classList.add('display-override-month');
                break;
            case 7:
                document.getElementById('aug').classList.add('display-override-month');
                break;
            case 8:
                document.getElementById('sep').classList.add('display-override-month');
                break;
            case 9:
                document.getElementById('oct').classList.add('display-override-month');
                break;
            case 10:
                document.getElementById('nov').classList.add('display-override-month');
                break;
            case 11:
                document.getElementById('dec').classList.add('display-override-month');
                break;
            
        }
    }
    disableDateImage(){
        this.disableMonthImage();
        this.disableDayImage();
    }
    disableMonthImage(){
        const els=document.getElementsByClassName('display-override-month');
        if(els.length>0){
            let x;
            for(x of els){
                x.classList.remove('display-override-month');
            }
        }
    }
    disableDayImage(){
        const els=document.getElementsByClassName('display-override-day');
        if(els.length>0){
            let x;
            for(x of els){
                x.classList.remove('display-override-day');
            }
        }
    }
    changeToDImage(dow,hour,half) {
        this.disableToDImage();
        switch(true) {
            case (hour<5&&half==='AM'):
                document.getElementById('ev').classList.add('display-override-tod');
                break;
            case (hour<9&&half==='AM'):
                document.getElementById('em').classList.add('display-override-tod');
                break;
            case (hour<12&&half==='AM'):
                document.getElementById('mo').classList.add('display-override-tod');
                break;
            case (hour===12&&half==='PM'):
                document.getElementById('lu').classList.add('display-override-tod');
                break;
            case (hour<4&&half==='PM'):
                document.getElementById('an').classList.add('display-override-tod');
                break;
            case (hour<8&&half==='PM'&&(dow!==0&&dow!==6)):
                document.getElementById('as').classList.add('display-override-tod');
                break;
            case (hour<12&&half==='PM'):
                document.getElementById('ev').classList.add('display-override-tod');
                break;
        }
    }
    disableToDImage(){
        const els=document.getElementsByClassName('display-override-tod');
        if(els.length>0){
            let x;
            for(x of els){
                x.classList.remove('display-override-tod');
            }
        }
    }
    changeDoWImage(dow) {
        this.disableDoWImage();
        switch(dow) {
            case 0:
                document.getElementById('sun').classList.add('display-override-dow');
                break;
            case 1:
                document.getElementById('mon').classList.add('display-override-dow');
                break;
            case 2:
                document.getElementById('tue').classList.add('display-override-dow');
                break;
            case 3:
                document.getElementById('wed').classList.add('display-override-dow');
                break;
            case 4:
                document.getElementById('thu').classList.add('display-override-dow');
                break;
            case 5:
                document.getElementById('fri').classList.add('display-override-dow');
                break;
            case 6:
                document.getElementById('sat').classList.add('display-override-dow');
                break;
        }
    }
    disableDoWImage(){
        const els=document.getElementsByClassName('display-override-dow');
        if(els.length>0){
            let x;
            for(x of els){
                x.classList.remove('display-override-dow');
            }
        }
    }
    changeWeatherIcon(id) {
        switch(true){
            case (id<600):
                //add thunder/rain code
                document.getElementById('rainy').classList.add('display-override-weather');
                console.log('thunder/rain');
                break;
            case (id<700):
                //add snow code
                document.getElementById('snowy').classList.add('display-override-weather');
                console.log('snow');
                break;
            case (id===800):
                //add clear/sunny code
                document.getElementById('sunny').classList.add('display-override-weather');
                console.log('sun');
                break;
            case (id<805):
                //add cloud code
                document.getElementById('cloudy').classList.add('display-override-weather');
                console.log('cloudy');
                break;
        }
    }
    dayNightCycle(data){
        const sunRise=data[0];
        const sunSet=data[1];
        const d=Date.now();

        if(d<sunSet.getTime()&&d>sunRise.getTime()){
            console.log('suntime');
            document.documentElement.style.backgroundImage="url('./media/backgrounds/city_day.jpg')";
        }
        else {
            console.log('nighttime');
            document.documentElement.style.backgroundImage="url('./media/backgrounds/city_night.jpg')";
        }
        
    }
    static displayLinks(links){
        const holder=document.getElementById('link-holder');
        console.log('displayLinks');
        const names=Object.keys(links);
        console.log(names);
        for(let x=0;x<names.length;x++){
            console.log('d '+x);
            holder.innerHTML=holder.innerHTML+
            `<figure>
                <img src=${QuickLinks.getIconURL(links[names[x]])}>
                <figcaption>${names[x]}</figcaption>
            </figure>`;
        }
    }
}