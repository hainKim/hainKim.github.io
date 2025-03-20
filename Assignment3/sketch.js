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
var button3; // play again
var tada, wrong, right, meow, kiss, cry, haha;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');

    tada = createAudio('clickMe.wav');
    wrong = createAudio('wrong.mp3');
    right = createAudio('yes!!.mp3');
    meow = createAudio('jomal.mp3');
    kiss = createAudio('ending.mp3');
    cry = createAudio('crow.mp3');
    haha = createAudio('haha.mp3');

    button = createButton('Start');
    button.style('font-size', '50px');
    button.style('padding', '10px 20px');
    button.position((width / 2) - 100, height - 150); 

    button.mousePressed(function() {
        button.hide();
        showText = false;
        showOptions = true;
        showQuestion = true;

        option1 = createButton('Brunch Cafe');
        option2 = createButton('Broccoli Pizza');
        option3 = createButton('Haidilao');

        [option1, option2, option3].forEach(button => {
            button.style('font-size', '20px');
            button.style('padding', '10px 20px');
        });

        let buttonY = height - 250; 
        option1.position((width / 2) - 150, buttonY);
        option2.position((width / 2) - 150, buttonY + 50);
        option3.position((width / 2) - 150, buttonY + 100);

        buttonreset = createButton('Restart');
        buttonreset.style('font-size', '20px');
        buttonreset.style('padding', '10px 20px');
        buttonreset.position((width / 2) - 50, buttonY + 150);
        buttonreset.hide();

        buttonreset.mousePressed(function() {
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

        option1.mousePressed(function() {
            option1.hide();
            option2.hide();
            option3.hide();
            wrong.play();
            buttonreset.show();
            showOptions = false;
            showQuestion = false;
            brunchfailed = true;
        });

        option2.mousePressed(function() {
            alert("mmm...are you sure?");
            option2.hide();
            option1.hide();
            option3.hide();
            cry.play();
            buttonreset.show();
            showOptions = false;
            showQuestion = false;
            broccolifailed = true;
        });

        option3.mousePressed(function() {
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
            button2.position((width / 2) - 100, height - 150); 
            button2.show();

            button2.mousePressed(function() {
                haidilao = false;
                button2.hide();
                showText2 = true;

                let option4 = createButton('Jo Malone Candle');
                let option5 = createButton('Flowers');
                let option6 = createButton('Pokemon plush');

                [option4, option5, option6].forEach(button => {
                    button.style('font-size', '20px');
                    button.style('padding', '10px 20px');
                });

                let buttonY = height - 250; 
                option4.position((width / 2) - 150, buttonY);
                option5.position((width / 2) - 150, buttonY + 50);
                option6.position((width / 2) - 150, buttonY + 100);

                buttonreset2 = createButton('Restart');
                buttonreset2.style('font-size', '20px');
                buttonreset2.style('padding', '10px 20px');
                buttonreset2.position((width / 2) - 50, buttonY + 150);
                buttonreset2.hide();

                buttonreset2.mousePressed(function() {
                    buttonreset2.hide();
                    option4.show();
                    option5.show();
                    option6.show();
                    showText2 = true;
                    jomal = false;
                    pokemon = false;
                    button3.hide();
                });

                option4.mousePressed(function() {
                    option4.hide();
                    option5.hide();
                    option6.hide();
                    meow.play();
                    buttonreset2.show();
                    showText2 = false;
                    jomal = true;
                });

                option5.mousePressed(function() {
                    option5.hide();
                    option6.hide();
                    option4.hide();
                    kiss.play();
                    showText2 = false;
                    ending = true;

                    button3 = createButton('Play Again');
                    button3.style('font-size', '30px');
                    button3.style('padding', '10px 20px');
                    button3.position((width / 2) - 100, height - 150); 
                    button3.show();

                    button3.mousePressed(function() {
                        alert("Thanks for playing!");
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
                });

                option6.mousePressed(function() {
                    option5.hide();
                    option6.hide();
                    option4.hide();
                    haha.play();
                    showText2 = false;
                    jomal = false;
                    pokemon = true;
                    buttonreset2.show();
                });
            });
        });
    });
}

function draw() {
    background('black');

    if (showText) {
        fill('white');
        textAlign(CENTER, CENTER);
        textSize(32);
        textStyle(BOLD);
        text(opening, width / 2, height / 2 - 50);
    }

    if (showOptions && showQuestion) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("You and Hain are planning to grab dinner for the first date. Where should you pick?",
            width / 2, textY);
    }
    if (brunchfailed) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("You chose Brunch Cafe...it's 7pm...",
            width / 2, textY);
    }
    if (broccolifailed) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("You chose...broccoli...pizza..?",
            width / 2, textY);
    }
    if (haidilao) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("'YESS!! I would LOVE to go to Haidilao!' Nice, you chose her favourite place!",
            width / 2, textY);
    }
    if (showText2) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("You have prepared a cute gift for her. Which one did you get?",
            width / 2, textY);
    }
    if (jomal) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("'It's our first date... Also, I live with two cats... i doubt it's safe. Thank you though, haha...'",
            width / 2, textY);
    }
    if (ending) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("'I LOVE flowers! You made my day :)' You successfully got Hains heart! Great Job!",
            width / 2, textY);
    }
    if (pokemon) {
        fill('white');
        textSize(24);
        textAlign(CENTER, CENTER);
        let textY = height / 2 - 100;
        text("'Ohh... cute!' She doesn't know this character's name...",
            width / 2, textY);
    }
}

function mousePressed() {
    tada.play();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    repositionButtons(); 
}

function repositionButtons() {
    if (button && showText) button.position((width / 2) - 100, height - 150); // start button
    if (option1 && showOptions) option1.position((width / 2) - 150, height - 250);
    if (option2 && showOptions) option2.position((width / 2) - 150, height - 200);
    if (option3 && showOptions) option3.position((width / 2) - 150, height - 150);
    if (buttonreset && buttonreset.visible()) buttonreset.position((width / 2) - 50, height - 100);
    if (button2 && haidilao) button2.position((width / 2) - 100, height - 150); // Next 
    if (button3 && ending) button3.position((width / 2) - 100, height - 150); // Play Again 
}