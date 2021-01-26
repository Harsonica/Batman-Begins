class Drop{
    constructor(x,y){
        friction:0.1
        

    }
    
    MatterBodysetPosition(){
        if(this.rain.position.y > height){
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
