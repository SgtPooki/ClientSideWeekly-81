var clockFace = document.querySelector('.clockFace');
var debugEl = document.querySelector('.debug');
var handHour = document.querySelector('.hand-hour');
var handMinute = document.querySelector('.hand-minute');
var handSecond = document.querySelector('.hand-second');
var handMillisecond = document.querySelector('.hand-millisecond');

var getfullStrokeLength = function getfullStrokeLength(radius) {
    return Math.PI * 2 * radius;
};
var fullHourStroke = getfullStrokeLength(handHour.getAttribute('r'));
var fullMinuteStroke = getfullStrokeLength(handMinute.getAttribute('r'));
var fullSecondStroke = getfullStrokeLength(handSecond.getAttribute('r'));
var fullMillisecondStroke = getfullStrokeLength(handMillisecond.getAttribute('r'));

handHour.setAttribute('stroke-dasharray', fullHourStroke);
handMinute.setAttribute('stroke-dasharray', fullMinuteStroke);
handSecond.setAttribute('stroke-dasharray', fullSecondStroke);
handMillisecond.setAttribute('stroke-dasharray', fullMillisecondStroke);

var renderCycle = function() {
    var time = new Date();
    var hours = time.getHours() % 12;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var milliseconds = time.getMilliseconds();

    handHour.setAttribute('stroke-dashoffset', fullHourStroke * (12 - hours/12) - fullHourStroke);
    handMinute.setAttribute('stroke-dashoffset', fullMinuteStroke * (60 - minutes/60) - fullMinuteStroke);
    handSecond.setAttribute('stroke-dashoffset', fullSecondStroke * (60 - seconds/60) - fullSecondStroke);
    handMillisecond.setAttribute('stroke-dashoffset', fullMillisecondStroke * (1000 - milliseconds/1000) - fullMillisecondStroke);

    debugEl.innerText = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

    requestAnimationFrame(renderCycle);
};
renderCycle();
