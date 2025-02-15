var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 2,
    colour: 'red',


    draw: function(){
        fill ( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0|| this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h|| this.y <0){
            this.ySpeed *= -1;
        }
    },
    changeColor: function(){
        if (this.colour === 'blue'){
            this.colour = 'red';
        } else {
            this.colour = 'blue';
        }
    }
};


var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 2,
    colour: 'blue',
    draw: function(){
        fill ( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0|| this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h|| this.y <0){
            this.ySpeed *= -1;
        }
    },
    changeColor: function(){
        if (this.colour === 'blue'){
            this.colour = 'orange';
        } else {
            this.colour = 'blue';
        }
    }
};

var yellowBrick = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    xSpeed: 5,
    ySpeed: 1,
    colour: 'yellow',
    draw: function(){
        fill ( this.colour );
        circle(this.x, this.y, this.w);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x - this.w / 2 < 0|| this.x + this.w / 2 > width){
            this.xSpeed *= -1;
        }
        if(this.y - this.w / 2 < 0|| this.y + this.w /2 > height){
            this.ySpeed *= -1;
        }
    },
    changeColor: function(){
        if (this.colour === 'yellow'){
            this.colour = 'black';
        } else {
            this.colour = 'yellow';
        }
    }
};


function setup(){
    createCanvas(720,480);
}

function draw(){
    background('grey');
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
}

function mousePressed(){
    redBrick.changeColor();
    blueBrick.changeColor();
    yellowBrick.changeColor();
}