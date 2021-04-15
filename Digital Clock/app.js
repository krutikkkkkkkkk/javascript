function getTime(){
    var date = new Date();

    var hour = date.getHours();
    var mintues = date.getMinutes();
    var seconds = date.getSeconds();
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timeZone').innerHTML =timeZone;
    document.getElementById('time').innerHTML = hour + ":" + mintues + ":" + seconds;
}
    getTime()
    setInterval(getTime, 1000)