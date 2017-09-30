/* eslint-disable*/

const minecraftTime = {
  ID: 'mcTime',
};

const realTime = {};
const timeUnit = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  weeks: 604800,
  months: 2628000,
  years: 31556930,
};

const Timer = function (ID, time, timeUnit) {
  this.ID = ID;

  function setTime(timeType, timeLimit, timeInSecs) {
    let setUnit = ~~((timeType % timeLimit) / timeInSecs); // Bitwise operation "~~" is used the same way as Math.floor
    const zero = setUnit.toString().length;
    if (zero < 2) {
      setUnit = `0${setUnit}`;
    }
    return setUnit;
  }
  this.secs = setTime(timeUnit, timeUnit.minutes, timeUnit.seconds);
  this.mins = setTime(timeUnit, timeUnit.hours, timeUnit.minutes);
  this.hrs = setTime(timeUnit, timeUnit.days, timeUnit.hours);

  this.formattedOutput = `${this.hrs} : ${this.mins} : ${this.secs}`;
  this.setHTML = document.getElementById(
    this.ID,
  ).innerHTML = this.formattedOutput;
  this.reset = document.getElementById(this.ID).innerHTML = '00:00:00';
};

// var Timer = function(){
//	startTimer
//	StopTimer
//	html ID
//	Html Output

// }

// <------------------------------------------->

let dayNightTimer = null;

let dawn = false;

// Could this be turned into OOP?
function setTime(timeType, timeLimit, timeInSecs) {
  let setUnit = ~~((timeType % timeLimit) / timeInSecs); // Bitwise operation "~~" is used the same way as Math.floor
  const zero = setUnit.toString().length;
  if (zero < 2) {
    setUnit = `0${setUnit}`;
  }
  return setUnit;
}
function beginTimer() {
  if (timerBtn.innerHTML == 'Start') {
    console.log(timerBtn.innerHTML);
    startTimer();
    timerBtn.innerHTML = 'Reset';
  } else if (timerBtn.innerHTML == 'Reset') {
    console.log(timerBtn.innerHTML);
    resetTimer();
    timerBtn.innerHTML = 'Start';
  }
}
function startTimer() {
  const start = new Date().getTime();
  if (dayNightTimer !== null) return;

  dayNightTimer = window.setInterval(() => {
    const time = new Date().getTime() - start;
    if (dawn === true) {
      console.log('Dawn');
      console.log(start);
    }

    // Minecraft Time ** starts at 6 am**
    // console.log(time);
    const mcTime = Math.floor((time + 300000) / 100) / 10 * 72;
    // mcTime = Math.floor(mcTime);

    const secs = setTime(mcTime, timeUnit.minutes, timeUnit.seconds);
    const mins = setTime(mcTime, timeUnit.hours, timeUnit.minutes);
    const hrs = setTime(mcTime, timeUnit.days, timeUnit.hours);

    document.getElementById('mcTime').innerHTML = `${hrs} : ${mins} : ${secs}`;

    // Real Time
    const realTime = Math.floor(time / 100) / 10;
    const rsecs = setTime(realTime, timeUnit.minutes, timeUnit.seconds);
    const rmins = setTime(realTime, timeUnit.hours, timeUnit.minutes);
    const rhrs = setTime(realTime, timeUnit.days, timeUnit.hours);
    document.getElementById(
      'realTime',
    ).innerHTML = `${rhrs} : ${rmins} : ${rsecs}`;

    dawn = false;
  }, 100);
}

function resetTimer() {
  clearInterval(dayNightTimer);
  document.getElementById('mcTime').innerHTML = '00:00:00';
  document.getElementById('realTime').innerHTML = '00:00:00';
  dayNightTimer = null;
  dawn = true;
}

const timerBtn = document.getElementById('timerBtn');
timerBtn.addEventListener('click', beginTimer, false);

/*
  var startTimerBtn = document.getElementById("start");
  startTimerBtn.addEventListener("click", startTimer, false);
  
  var resetTimerBtn = document.getElementById("stop");
  resetTimerBtn.addEventListener("click", resetTimer, false);
  */
