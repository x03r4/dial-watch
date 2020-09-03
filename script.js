setInterval(clock, 1000);

var secondHand = document.querySelector('[second_hand]');
var minuteHand = document.querySelector('[minute_hand]');
var hourHand = document.querySelector('[hour_hand]');

function clock() {
  var date = new Date();
  var second = date.getSeconds() / 60;
  var minute = (second + date.getMinutes()) / 60;
  var hour = (minute + date.getHours()) / 12; 
  rotation(secondHand, second);
  rotation(minuteHand, minute);
  rotation(hourHand, hour);
}

function rotation(hand, rotation) {
  hand.style.setProperty('--rotation', rotation * 360);
}