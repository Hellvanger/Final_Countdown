

//from here we import days, hours, minutes and second to js
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//from here we set the final countdown Date like importing it
//I guess this is the closes Date for final to start
//since it starts in between 8th - 23rd of December 2022
const finalCountdown = new Date('December 08, 2022 15:37:25').getTime();



function counterUpdate() {
    /*
    from here we get the current year Date
    then substract it with our final countdown time
    in order to display into the webpage
     */
    const currentYear = new Date().getTime();
    const time = finalCountdown - currentYear;

    const d = Math.floor(time / (1000 * 60 * 60 * 24));

    const h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor( (time%(1000 * 60)) / 1000);

    //display
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    //from here if the final countdown expired then it'll display a message
    if (time < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "SORRY THE FINAL COUNTDOWN HAS BEEN EXPIRED";

    }
}
//calling out the function counterUpdate()
setInterval(counterUpdate, 1000);


