var button;
var option1, option2, option3;
var opening = "Get Hains Heart";
var button2;
var showText = true;
var showOptions = false;
var showQuestion = true;
var buttonreset;
var buttonreset2;
let brunchfailed = false;
let broccolifailed = false;
let haidilao = false;
var showText2 = false;
let jomal = false;
let ending = false;
let pokemon = false;
var button3; //play again
var tada
var wrong
var right
var meow
var kiss
var cry
var haha

function setup(){
    createCanvas (windowWidth/2,windowHeight/2);
    tada = createAudio('clickMe.wav');
    wrong = createAudio('wrong.mp3');
    right = createAudio('yes!!.mp3');
    meow = createAudio('jomal.mp3');
    kiss = createAudio('ending.mp3');
    cry = createAudio('crow.mp3');
    haha = createAudio('haha.mp3');

    button = createButton('Start');
    button.style('font-size', '50px');
    button.style('padding','10px 20px');

    let buttonWidth = 200;
    let buttonHeight = 80;
    button.position((width/2)-(buttonWidth/2), (height/2)+20);

       button.mousePressed(function(){
            button.hide();
            showText = false;
            showOptions = true;
            showQuestion = true;
    

            option1 = createButton('Brunch Cafe');
            option2 = createButton('Broccoli Pizza');
            option3 = createButton('Haidilao');

           [option1, option2, option3].forEach(button =>{
             button.style('font-size','20px');
             button.style('padding', '10px 20px');
        });

        let buttonY = (height/2)+20;
        option1.position((width/2)-100, buttonY);
        option2.position((width/2)-100, buttonY + 50);
        option3.position((width/2)-100, buttonY+100);

        buttonreset = createButton('Restart');
        buttonreset.style('font-size', '20px');
        buttonreset.style('padding', '10px 20px');
        buttonreset.position((width/2)-50, buttonY +150);
        buttonreset.hide();

        buttonreset.mousePressed(function(){
            buttonreset.hide();
            showText = true;
            showOptions = false;
            showQuestion = true;
            option1.hide();
            option2.hide();
            option3.hide();
            button.show();
            brunchfailed = false;
            broccolifailed = false;
        });

        option1.mousePressed(function(){
            option1.hide();
            option2.hide();
            option3.hide();
            wrong.play();
            buttonreset.show();
            showOptions = false;
            showQuestions = false;
            brunchfailed = true;
        });

        option2.mousePressed(function(){
            alert("mmm...are you sure?")
            option2.hide();
            option1.hide();
            option3.hide();
            cry.play();
            buttonreset.show();
            showOptions = false;
            showQuestion = false;
            broccolifailed = true;
        });

        option3.mousePressed(function(){
            option1.hide();
            option2.hide();
            option3.hide();
            right.play();
            buttonreset.hide();
            showOptions = false;
            showQuestion = false;
            haidilao = true;
            

            button2 = createButton('Next');
            button2.style('font-size', '50px');
            button2.style('padding', '10px 20px');
            
            button2.show();
            let button2Width = 200;
            let button2Height = 80;
            button2.position((width/2)-(button2Width/2), (height/2)+20);
            
            button2.mousePressed(function(){
                haidilao = false;
                button2.hide();
                showText2 = true;
                                
                let option4;
                let option5;
                let option6;
                

                option4 = createButton('Jo Malone Candle');
                option5 = createButton('Flowers');
                option6 = createButton('Pokemon plush');

           [option4, option5, option6].forEach(button =>{
             button.style('font-size','20px');
             button.style('padding', '10px 20px');
            });
            let buttonY = (height/2)+20;
            option4.position((width/2)-100, buttonY);
            option5.position((width/2)-100, buttonY + 50);
            option6.position((width/2)-100, buttonY+100);

            buttonreset2 = createButton('Restart');
            buttonreset2.style('font-size', '20px');
            buttonreset2.style('padding', '10px 20px');
            buttonreset2.position((width/2)-50, buttonY +150);
            buttonreset2.hide();

            buttonreset2.mousePressed(function(){
                buttonreset2.hide();
                option4.show();
                option5.show();
                option6.show();
                showText2 = true;
                jomal = false;
                pokemon = false;
                button3.hide();
            });

            option4.mousePressed(function(){
                option4.hide();
                option5.hide();
                option6.hide();
                meow.play();
                buttonreset2.show();
                showText2 = false;
                jomal = true;
                button3.hide();
            });

            option5.mousePressed(function(){
                option5.hide();
                option6.hide();
                option4.hide();
                kiss.play();
                showText2 = false;
                jomal = false;
                ending = true;

                button3 = createButton('Play Again');
                button3.style('font-size', '30px');
                button3.style('padding', '10px 20px');

                let button3Width = 200;
                let button3Height = 80;
                button3.position((width/2)-(button3Width/2), (height/2)+50);
                
                button3.mousePressed(function(){
                    alert("Thanks for playing!")
                    button3.hide();
                    option5.hide();
                    option6.hide();
                    option4.hide();
                    showText2 = false;
                    jomal = false;
                    ending = false;
                    pokemon = false;
                    button.show();
                    showText = true;

            });
            button3.show();
        });  
            option6.mousePressed(function(){
                option5.hide();
                option6.hide();
                option4.hide();
                haha.play();
                showText2 = false;
                jomal = false;
                ending = false;
                pokemon = true;
                buttonreset2.show();
                button3.hide();
            });
            
            // button3 = createButton('Play Again');
            // button3.style('font-size', '50px');
            // button3.style('padding', '10px 20px');
            
            // button3.show();
            // let button3Width = 200;
            // let button3Height = 80;
            // button3.position((width/2)-(button3Width/2), (height/2)+20);
            // })
            // button3.hide();

            // button3.mousePressed(function(){
            //     option5.hide();
            //     option6.hide();
            //     option4.hide();
            //     showText2 = false;
            //     jomal = false;
            //     ending = false;
            //     pokemon = false;
            //     button.show();
            //     showText = true;
            })
        });
    });
 }

function draw(){
    background('black');
   
    if (showText){
        fill('white'); 
    textAlign(CENTER, CENTER);
    textSize(32);
    textStyle(BOLD);

    text(opening, width / 2, (height / 2) - 50);
    }

    if(showOptions && showQuestion){
        fill('white');
        textSize(24);

        let textBoxWidth = width*0.8;

        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;

        text("You and Hain are planning to grab dinner for the first date. Where should you pick?", 
        textX, textY, textBoxWidth);
    }
    if(brunchfailed){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("You chose Brunch Cafe...it's 7pm...", 
        textX, textY, textBoxWidth);
    }
    if(broccolifailed){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("You chose...broccoli...pizza..?", 
        textX, textY, textBoxWidth);
    }
    if(haidilao){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("'YESS!! I would LOVE to go to Haidilao!' Nice, you chose her favourite place!", 
        textX, textY, textBoxWidth);
    }
    if(showText2){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("You have prepared a cute gift for her. Which one did you get?", 
        textX, textY, textBoxWidth);
    }
    if(jomal){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("'It's our first date... Also, I live with two cats... i doubt it's safe. Thank  you though, haha...'", 
        textX, textY, textBoxWidth);
    }
    if(ending){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("'I LOVE flowers! You made my day :)' You successfully got Hains heart! Great Job!", 
        textX, textY, textBoxWidth);
    }
    if(pokemon){
        fill('white');
        textSize(24);
        
        let textBoxWidth = width*0.8;
        
        textAlign(LEFT, CENTER);
        let textX = (width/2)-(textBoxWidth/2); 
        let textY = (height/2)- 100;
        
        text("'Ohh... cute!' She doesn't know this character's name...", 
        textX, textY, textBoxWidth);
    }
}

function mousePressed(){
    tada.play();
}

