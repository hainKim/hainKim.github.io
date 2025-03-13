var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
let checkboxes = [];
let drawingSuggestions = ["flower", "cat", "dog", "fish", "your favourite person"];
let showChecklist = true;
let toggleCheckbox;

function setup(){
    createCanvas(720,300); 
    colourPicker = createColorPicker('deeppink');

    strokeWeightSlider = createSlider(1,10,5,1);

    bgColourPicker = createColorPicker('grey');

    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint );
    //-----------referenced from https://p5js.org/reference/p5/createSelect/
    brushChange = createSelect();
    brushChange.option('square');
    brushChange.option('circle');
    brushChange.option('line');
    brushChange.selected('line');
    
    createP("Try drawing these!").style("font-weight", "bold",);

    toggleCheckbox = createCheckbox("self portrait");
    toggleCheckbox.changed(toggleChecklistVisability);

    checkboxes = drawingSuggestions.map(lable => createCheckbox(lable));
    //--------



    background(bgColourPicker.value() );
}

function draw(){
//    ellipse(mouseX,mouseY, 10, 10);

    strokeWeight(strokeWeightSlider.value() );
    stroke(colourPicker.value() );

    if(mouseIsPressed){
        
        let brushType = brushChange.value();
        if (brushType === 'line'){
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (brushType === 'circle'){
            ellipse(mouseX, mouseY, strokeWeightSlider.value()*2);
        }  else if (brushType === 'square'){
            rect(mouseX, mouseY, strokeWeightSlider.value()*2, strokeWeightSlider.value()*2);
             
        }
    
    }
}

function repaint(){
    background(bgColourPicker.value());
}

function toggleChecklistVisability(){
    showChecklist = toggleCheckbox.checked();

    let yOffset = 120;
}