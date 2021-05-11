const btns = document.querySelectorAll('header button');
const miliseconds = document.querySelector('p > span.miliseconds');
const seconds = document.querySelector('p > span.seconds');
const minutes = document.querySelector('p > span.minutes');
let watchStop = false;
let time = 0;
let secondsValue = 0;
let minutesValue = 0;

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
    btns[1].removeAttribute('disabled')
    btns[1].classList.add('red');
    watchStop = true;
    countTime();
  } else {
    e.target.classList.remove("red");
    e.target.textContent = "Start";
    // btns[1].setAttribute("disabled", "disabled");
    btns[1].classList.add("red");
    watchStop = false;
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

    console.log(time);


    timeoutIndex = setTimeout(countTime, 10);
  }

}