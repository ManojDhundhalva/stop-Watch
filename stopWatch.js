
let hours = 0;
let min = 0;
let sec = 0;

let hourString = "";
let minString = "";
let secString = "";

let pause = true;
let interval;

document.getElementById("start").onclick = function () {
    if (pause) {
        pause = false;

        let changeColor = document.getElementById("stopWatch");
        changeColor.style.color = "green";

        interval = setInterval(startTime, 1000);
    }
}

document.getElementById("pause").onclick = function () {
    if (pause == false) {
        pause = true;
        clearInterval(interval);

        let changeColor = document.getElementById("stopWatch");
        changeColor.style.color = "red";
    }
}

document.getElementById("reset").onclick = function () {
    // clearInterval(interval);
    hourString = "00";
    minString = "00";
    secString = "00";

    hours = 0;
    min = 0;
    sec = 0;

    let changeColor = document.getElementById("stopWatch");
    changeColor.style.color = "green";

    document.getElementById("stopWatch").textContent = `${hourString}:${minString}:${secString}`;
}


function startTime() {

    sec += 1;
    if (sec % 60 == 0) {
        sec = 0;
        min += 1;

        if (min % 60 == 0) {
            min = 0;
            hours += 1;
        }
    }

    hourString = roundTime(hours);
    minString = roundTime(min);
    secString = roundTime(sec);

    function roundTime(time) {
        let ttime = String(time);
        if (ttime.length < 2) {
            ttime = "0" + ttime;
        }
        return ttime;
    }

    document.getElementById("stopWatch").textContent = `${hourString}:${minString}:${secString}`;
}