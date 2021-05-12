const btns = document.querySelectorAll('header button');
const miliseconds = document.querySelector('p > span.miliseconds');
const seconds = document.querySelector('p > span.seconds');
const minutes = document.querySelector('p > span.minutes');
let watchStop = false; // time is not count
let time = 0;
let secondsValue = 0;
let minutesValue = 0;
const arrLaps = [];

btns[1].style.display = "none";

btns[0].addEventListener('mouseenter', function(e) {
  e.target.classList.add('green');
});

btns[0].addEventListener("mouseleave", function (e) {
    e.target.classList.remove("green");
});

btns[0].addEventListener('click', (e) => {
  if(!watchStop){
    e.target.classList.add("red");
    e.target.textContent = 'Stop';
    btns[2].removeAttribute('disabled')
    btns[2].classList.add('red');
    btns[1].style.display = "block"
    watchStop = true;
    countTime();
  } else {
    e.target.classList.remove("red");
    e.target.textContent = "Start";
    btns[2].classList.add("red");
    watchStop = false;
  }
});

btns[1].addEventListener('click', function() {
  if(watchStop) {
    const minutes = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
    const seconds = secondsValue < 10 ? `0${secondsValue}` : secondsValue;
    const miliseconds = time < 10 ? `0${time}` : time;
    // btns[1].removeAttribute("disabled");
    let lap = `${minutes}:${seconds}:${miliseconds}`;
    arrLaps.push(lap);
    console.log(lap);
    console.log(arrLaps);

    const ul = document.querySelector('.wrapper main ul');
    const li = document.createElement('li');
    const df = document.createDocumentFragment();

    for(let i = 0; i < arrLaps.length; i++){
      li.textContent = arrLaps[i];
      df.appendChild(li);
    }

    ul.appendChild(df);

  } else {
    // Think about this
      // btns[1].setAttribute("disabled", "disabled");
  }


});

const countTime = () => {
  if (watchStop) {
    ++time;

    miliseconds.textContent = time;

    if(time === 99) {
      secondsValue++;
      seconds.textContent = secondsValue < 10 ? `0${secondsValue}` : secondsValue;
      time = 0;
    }

    // console.log(time);


    timeoutIndex = setTimeout(countTime, 10);
  }

}

btns[2].addEventListener('click', () => {
  if(miliseconds > 0 || minutes > 0) {
    // btns[2].classList.add('red');
    minutes.textContent = '00';
    minutes = 0;
    seconds.textContent = '00';
    seconds = 0;
    miliseconds.textContent = '00';
    miliseconds = 0;
  } else {
    // btns[2].classList.remove('red');
  }

  console.log('2dsad');

})