function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var clockB = document.getElementById(id+'B');
    var daysSpan = clock.querySelector('.days');
    var daysSpanB = clockB.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var hoursSpanB = clockB.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var minutesSpanB = clockB.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var secondsSpanB = clockB.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        daysSpanB.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        hoursSpanB.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        minutesSpanB.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        secondsSpanB.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 14 * 28 * 33 * 1000); // for endless timer
initializeClock('clockdiv', deadline);
