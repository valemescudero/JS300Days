const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minDegrees}deg)`


  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 1000);
