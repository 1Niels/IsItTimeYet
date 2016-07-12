$(document).ready(function(){
    var enddate = new Date(" July 11, 2016 13:33:00");
        var now = new Date();
        var timetill = enddate.getTime() - now.getTime();
        
       
    if (timetill <= 0) {
        $("#no").hide();
        $("#icon").attr("href", "yes.ico")
    }
    else {
        $("#yes").hide();
         $("#icon").attr("href", "no.ico")
     
    }
  
    
    
});

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();
    if(now.getHours() > hours || now.getHours() == hours && now.getMinutes() > minutes || now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(13,33,00); 