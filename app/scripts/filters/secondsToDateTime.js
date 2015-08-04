/**
 * secondsToDateTime filter : get seconds and return time
 */
app.filter('secondsToDateTime', function() {
    return function(seconds) {
        var d = new Date(0,0,0,0,0,0,0);
        d.setSeconds(seconds);
        var time = d.getHours() + 'h ' + d.getMinutes() + 'm ' + d.getSeconds() + 's';
        return time;
    };
});