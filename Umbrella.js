class Umbrella{
    constructor(x,y){
        umbrella.isStatic= true
        umbrella = loadImage("walking_1.png")

    }


    circularMatterBody(){
        if(this.umbrella.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

            for(var i=0;i<maxDrops;i++){
                drops.push(new createDrop(random(0,400), random(0,400)));
            }
        }
    }

    updateMatterBodysetPosition(){
       
            index.ref('/').update({
              gameState: state
            });
        
    }
    }
