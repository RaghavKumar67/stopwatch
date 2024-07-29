let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

let isRunning = false;

const button = document.getElementById('startStopButton');

button.addEventListener('click', function() {
    if (isRunning) {
        
        stopProcess();
        button.textContent = 'Start';
       
    } else {
        
        startProcess();
        button.textContent = 'Pause';
        
    }
    isRunning = !isRunning;
});

function startProcess() {
    console.log("Start button clicked");
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
    
}

function stopProcess() {
    console.log("Stop button clicked");
    clearInterval(timerId);
    
}

stopBtn.addEventListener('click', function(){
    alert(`Final elapsed time is ${timerDisplay.innerHTML}`);
    console.log("Stop button clicked");
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

resetBtn.addEventListener('click', function(){
    console.log("Reset button clicked");
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}