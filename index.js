//
// Const
//

const time = 2; // Minutes of work
const rest = 5; // MInutes of rest

//
// Variables
//

// Keep track if timer is running
var timer = false;
// the current count in seconds
var counter = 0;

//
// countdown
//

function countdown(secs) {
    var display = "";

    if (secs > 600) {
        mins = Math.floor(secs / 60);
        seconds = secs % 60;
        if (seconds === 0) {
            seconds = "00";
        }
        display = mins + ":" + secoonds;
    } else if (secs > 60) {
        mins = Math.floor(secs / 60);
        seconds = secs % 60;
        if (seconds === 0) {
            seconds = "00";
        }
        display = "0" + mins + ":" + seconds;
    } else if (secs > 10) {
        display = secs;
    } else {
        display = "0" + secs;
    }
    document.querySelector("#timer").innerHTML = display;
    secs -= 1;
    counter -= 1;
    if (secs >= 0 && timer === true) {
        setTimeout(() => {
            countdown(secs);
        }, 1000);
    }
    // TODO: Include here the next cycle
}

//
// Check for the clicks
//

// Start the countdown
document.querySelector("#start").addEventListener("click", () => {
    if (timer === false) {
        timer = true;
        if (counter == 0) {
            counter = time * 60;
        }
        countdown(counter);
    } else {
        timer = false;
    }
})

// Reset the countdown
document.querySelector("#reset").addEventListener("click", () => {
    document.querySelector("#timer").innerHTML = "25:00";
});

// TODO: different rounds:
// TODO: Update the <p>-Text