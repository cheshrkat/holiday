var Holiday = require('holiday-udp'),
    holiday = new Holiday('enlightenment');

var interval = 500;

var frame = [
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
    [100,0,0], [0,100,0], [0,0,100], [100,100,100], [100,100,100],
];

function shiftFrame() {
    var shifted = frame.shift();
    frame.push(shifted);
}
function setLights() {
    holiday.send(frame, shiftFrame);
}

var startTheChase = global.setInterval(setLights,interval);
console.log("ctrl+c to stop lights");