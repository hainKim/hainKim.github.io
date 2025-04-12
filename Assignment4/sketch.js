var fishes = [];
let allcolors = ['black', 'yellow', 'skyblue', 'pink', 'white'];
let bubbles = [];
let music;
let playButton;
let playbuttonOpacity = 255;
let byebutton = false;

function setup(){
    createCanvas(windowWidth, 800);
    
    music = createAudio('waterBubbles.mp3');
    music.volume(0.5);
    
    playButton = createButton('Enjoy the experience!');
    playButton.position(10, height +40);
    
    playButton.mousePressed(()=>{
        music.loop();
        byebutton = true;
    })

    for (let i = 0; i < 5; i++){
        fishes.push(new Fish());
    }
    

    addFishButton = createButton('Add more Fish');
    addFishButton.position (10, height +10);
    addFishButton.mousePressed(()=> fishes.push(new Fish()));
}

function drawtheBackground(){
    for (let y = 0; y < height; y++){
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color('#001f3f'), color('#0074D9'), inter);
        stroke(c);
        line(0, y, width, y);
    }
}

function draw(){
    drawtheBackground();
    
    for (let i = bubbles.length - 1; i>=0; i--){
        bubbles[i].update();
        bubbles[i].display();
        if (bubbles[i].isFinished()){
            bubbles.splice(i, 1);
        }
    }

    for (let i = fishes.length - 1; i >= 0; i--){
        fishes[i].update();
        fishes[i].display();
        if (fishes[i].lifespan < 0){
            fishes.splice(i, 1);
        }
    }

    if (byebutton && playButton){
        playbuttonOpacity -=5;
        playButton.style ('opacity', playbuttonOpacity / 255);
        if (playbuttonOpacity <= 0){
            playButton.remove();
            playButton = null;
        }
    }

}
// https://p5js.org/reference/p5/class/ //
class Fish {
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.baseY = random(100, height-100);
        this.speed = random(1, 2);
        this.colour = random(allcolors);
        this.lifespan = 1000;
        this.phase = random(TWO_PI);
    }

    update(){
        this.x += this.speed;
        this.lifespan--;
        if (this.x>width + 30){
            this.x = -30;
        }

        if (random() < 0.01){
            bubbles.push(new Bubble(this.x, this.baseY));
        }
    }
    display(){
        let yOffset = sin(frameCount*0.1 + this.phase)*5;
        let currentY = this.baseY + yOffset;

        fill(this.colour);
        noStroke();
        ellipse(this.x, currentY, 30, 15);
        triangle(this.x - 15, currentY, this.x-30, currentY-5, this.x-25, currentY+5);
    }

}

class Bubble {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = random(5,15);
        this.alpha = 255;
    }

    update(){
        this.y -= 1;
        this.alpha -= 2;
    }

    display(){
        noFill();
        stroke(255, this.alpha);
        strokeWeight(2);
        ellipse(this.x, this.y, this.r);
    }

    isFinished(){
        return this.alpha <= 0 || this.y < 0;
    }
}
///////