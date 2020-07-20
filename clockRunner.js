function updateTime(){
    let time= new Date();
    document.getElementById('clock').innerHTML=time.getHours()+":"+time.getMinutes()+":"+ time.getSeconds();
    setTimeout(updateTime,1000);
}
updateTime();