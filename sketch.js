var umbrella;
var raindrops;

function preload(){
    
}

function setup(){
   canvas(200,200);
    umbrella = new Umbrella(400, 500, 60, 60);
}

function draw(){
    umbrella.display()
}   

