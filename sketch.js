

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw (){
    background(0,200,80,10);
    fill ('aquamarine');
    stroke('white');

    for(var i = 0; i < 20000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }
    fill ('pink');
    stroke ('white');
    for(var i = 10; i < 5000; i++){
        circle ((i*2)%width, (i*2)%height,20);
    }
    fill ('blue');
    stroke('black');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}