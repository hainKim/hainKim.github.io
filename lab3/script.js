// https://p5js.org/tutorials/variables-and-change/
// this code comes from this tutorial
// console, / is the coment command in any lang

var schmoDiv = document.getElementById("schmo");

document.getElementById('schmo').innerHTML('found it');

// schmoDiv.hidden = true;
if(schmoDiv === null){
    // do something...
}
console.log(schmoDiv);

function ourDivwasClicked(){
    if(schmoDiv.innerHTML === "Hello!"){
        schmoDiv.innerHTML = "howdy!";    
    }else{
        schmoDiv.innerHTML = "Hello!";
    }
}

schmoDiv.onclick = ourDivwasClicked;