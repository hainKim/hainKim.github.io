var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
   }

function draw(){
    background('#2E8B57');
    circle(x,y,20,20);
    x = x + 3;
    x = x % 720;
    y = y + 2;
    y = y % 480;
}