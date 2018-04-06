'use strict';

var DateBetween = function DateBetween(startDate, endDate, prefix) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;

  if (distance < 0) {
    return false;
  }

  var days = Math.floor(distance / day);
  var hours = pad(Math.floor(distance % day / hour));
  var minutes = pad(Math.floor(distance % hour / minute));
  var seconds = pad(Math.floor(distance % minute / second));
  if(days > 1 && prefix == 'Day'){
    prefix = 'Days';
  }
  var between = [];

  days > 0 ? between.push(days + ' ' + prefix + ' ') : false;
  between.push(hours + ' : ');
  between.push(minutes + ' : ');
  between.push(seconds);

  return between.join(' ');
};
function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}
module.exports = DateBetween;
