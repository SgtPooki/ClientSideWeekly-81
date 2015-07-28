var debugEl = document.querySelector('.debug');
var renderCycle = function() {
    var time = new Date();
    var milliseconds = time.getMilliseconds();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours() % 12;

    debugEl.innerText = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

    requestAnimationFrame(renderCycle);
};
renderCycle();
