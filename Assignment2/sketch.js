// --------------------------------------------
// https://p5js.org/tutorials/animating-with-media-objects/ - referenced when setting up canvas
let art1;
let art2;
let art3;
var currentFunction;

let artY = 500;

function preload(){
    art1 = loadImage("art1.jpg", img => img.resize(400,0));
  
    art2 = loadImage("art2.jpg", img=> img.resize(400,0));

    art3 = loadImage("art3.png",img => img.resize(400,0));
    artworks = [art1, art2, art3];
}

function setup(){
    createCanvas(500,500);
    imageMode (CENTER);

    currentFunction = displayArt1;

    let nextArtButton = createButton('Next');

    nextArtButton.mousePressed(switchArtwork);
}

function draw(){
    background ('black');
    currentFunction();
}

// remixing end
// --------------------------------------------

function displayArt1(){
    image (art1, width/2, height/2);
}
function displayArt2(){
    image (art2, width/2, height/2);
}
function displayArt3(){
    image (art3, width/2, height/2);
}

function switchArtwork(){
    if(currentFunction === displayArt1){
        currentFunction = displayArt2;
    }else if (currentFunction === displayArt2){
        currentFunction = displayArt3;
    }else {
        currentFunction = displayArt1;
    }
}




















//    //---------------------------------
//     //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 learned how to make fancier button
//     nextArtButton.position(200,550);
//     nextArtButton.style('padding', '25px 50px');
//     nextArtButton.style('font-size', '20px');
//     nextArtButton.style('color', 'black');
//     nextArtButton.style('background-color', 'pink');
//     nextArtButton.style('border', 'none');
//     nextArtButton.style('border-radius', '20px');
//     nextArtButton.style('box-shadow', '0 9px #999');

//     nextArtButton.position(buttonX, buttonY);
    
//     nextArtButton.mousePressed(mousePressedEffect);
//     nextArtButton.mouseReleased(mouseReleasedEffect);

//     console.log(typeof nextArtButton);

//     function mouseOverEffect(){
//         this.style('background-color', 'pink');
//     }

//     function mousePressedEffect(){
//         console.log("Button Pressed!");
//         this.style('background-color', 'red');
//         this.style('box-shadow', '0 5px #666');
//         this.position(buttonX, buttonY + 4);
//     }

//     function mouseReleasedEffect(){
//         console.log("button Released!")
//         this.style('background-color', 'pink');
//         this.style('box-shadow', '0 9px #999');
//         this.position(buttonX, buttonY);
//     }
//  // done remixing...but didn't work somehow so had to go index to try
//  //---------------------------------