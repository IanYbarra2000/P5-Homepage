let time12=true;
function updateTime(){
    let time= new Date();
    let dow= time.getDay();
    let month=time.getMonth();
    let day=time.getDate();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let half='';
    const controller = new UiController();
    //format hours to conform to 12 hour time
    if(time12){
        if(time.getHours()===0) {
            hour=12;
        }
        else if(time.getHours()<=12){
            hour=time.getHours();
        }
        else {
            hour=(time.getHours()-12);
        }
    }
    //format minutes and seconds to always be two digits
    if(time.getMinutes()<10){
        minute="0"+time.getMinutes();
    }
    if(time.getSeconds()<10){
        second="0"+time.getSeconds();
    }

    //sets which half of the day it is
    if(time12){
        if(time.getHours()<12){
            half='AM';
        }
        else {
            half='PM';
        }
    }
    //set the html of clock to the current time
    controller.changeTime(month,day,dow,hour,minute,second,half);
    setTimeout(updateTime,1000);
}

updateTime();