const targetDate = new Date("2025-1-1 00:00:00").getTime();

const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    
    createCountdown(timeRemaining , "time")
  
}, 1000);

function createCountdown(timeRemaining , id){
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    changeHTMLDateContent(days , hours , minutes ,seconds , id);
    checkTimeout(timeRemaining , id)

}

function changeHTMLDateContent(days , hours , minutes , seconds , id){
    document.querySelector("."+ id + " > #days").innerHTML = days;
    document.querySelector("."+ id + " > #hours").innerHTML = hours;
    document.querySelector("."+ id + " > #minutes").innerHTML = minutes;
    document.querySelector("."+ id + " > #seconds").innerHTML = seconds;

   
}

function checkTimeout(timeRemaining , id) {
    if(timeRemaining < 0) {

        document.getElementById(id).innerHTML = "Countdown expired!";
    }
}