let angle = 0;
let interaction = false;
let cx, cy;
let redirected = false;
let ready = false;
let handImage;
let handleLength = 60;

let startAngle = 0;
let startMouseAngle = 0;
// flickering
let trembleX = 0;
let trembleY = 0;

let bgm;
let songPlayed = false;


//gonna add trails effects

let trail = [];

function preload(){
    handImage = loadImage("hand.png");
}


function setup(){

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '2');
    canvas.style('pointer-events', 'auto');
    
    setTimeout(()=> {
        const img = document.getElementById("clockBase");
        const rect = img.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height/ 2;
        ready = true;
        console.log("angle", cx, cy);
    }, 100);

    bgm = document.getElementById("bgm");

}

function draw(){

    if (!ready) return;

    clear();

    //trail
    trail.push({angle: angle, time: frameCount});
    if (trail.length>20)trail.shift();
    
    let scaleFactor = 0.2;
    let newW = handImage.width * scaleFactor;
    let newH = handImage.height * scaleFactor;

    let near3am = abs(angle - HALF_PI)<0.2;

    // loopss
    for (let i=0; i < trail.length; i++){
        let t= trail[i];
        let alpha = map(i, 0, trail.length, 30, 5);
    
    // handle making
        push();
        translate(cx + trembleX, cy + trembleY);
        rotate(t.angle);
        imageMode(CENTER);
        tint(255, alpha);
        image(handImage, 0, -newH/2, newW, newH);
        pop();

    }

    noTint();

    if (near3am){
        trembleX = random(-1.5, 1.5);
        trembleY = random(-1.5, 1.5);
    }else{
        trembleX = 0;
        trembleY = 0;
    }
    //real hand
    push();
    translate(cx + trembleX, cy + trembleY);
    rotate(angle);
    imageMode(CENTER);
    image(handImage, 0, -newH/2, newW, newH);
    pop();

    if (!redirected && abs(angle-HALF_PI)< 0.1){
        redirected = true;
        bgm.pause();
        setTimeout(()=>{
            window.location.href = "https://hainkimart.myportfolio.com/";
        }, 1500);
        
    }

    // adding sync to the background
    let grainOverlay = document.getElementById("grain");

    // grain
    if (near3am){
        let pulse = map(sin(frameCount*0.5), -1, 1, 0.08, 0.2);
        grainOverlay.style.opacity = pulse.toFixed(3);

        let brightness = 1.2 + 0.3 * sin(frameCount * 2);
        grainOverlay.style.filter = 'brightness(${brightness}) blur (0.5px)';
    }else{
        grainOverlay.style.opacity = "0.05";
        grainOverlay.style.filter = "brightness(1.2) blur(0.5px)";
    }

}

function mousePressed(){
    if (!ready) return;
    // if (dist(mouseX, mouseY, cx, cy) < handleLength /2 +10){
    //     interaction = true;
    // }
    let dx = mouseX - cx;
    let dy = mouseY - cy;

    let rotatedX = dx * cos(-angle) - dy * sin(-angle);
    let rotatedY = dx * sin(-angle) + dy * cos(-angle);
    
    let scaleFactor = 0.5;
    let imgW = handImage.width * scaleFactor;
    let imgH = handImage.height * scaleFactor;
    let drawY = -imgH/2;

    let top = drawY - imgH/2;
    let bottom = drawY + imgH/2;
    let left = -imgW/2;
    let right = imgW/2;

    if(
        rotatedX > left && rotatedX < right &&
        rotatedY > top && rotatedY < bottom
    ){
        interaction = true;
        startAngle = angle;
        startMouseAngle = atan2(dy, dx);
    }

    if (!songPlayed){
        bgm.play();
        songPlayed = true;
    }

}

function mouseReleased(){
    interaction = false;
}

function mouseDragged(){
    if (!interaction || !ready) return;

    let dx = mouseX - cx;
    let dy = mouseY - cy;
    let currentMouseAngle = atan2(dy,dx);

    angle = startAngle + (currentMouseAngle - startMouseAngle);
    
}