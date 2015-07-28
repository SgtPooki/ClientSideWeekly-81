var renderCycle = function() {
    var time = new Date();
    var milliSeconds = time.getMilliseconds();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours() % 12;

    requestAnimtionFrame(renderCycle);
};
renderCycle();
