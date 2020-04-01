window.onload = function(){
    console.log("HOLA MUNDO");

    let game = new Phaser.Game(360,640,Phaser.AUTO,'content',
    {
        //primero key del objeto (inamovible), el segundo es el nombre de la función, si va a ser webgl o canvas, el contenedor div
        preload : preload,
        create : create,
        update : update
    }
    );
    function preload(){
        game.load.image("backyard","assets/images/backyard.png"); 
        game.load.image("arrow","assets/images/arrow.png");
        game.load.image("apple","assets/images/apple.png");
        game.load.image("candy","assets/images/candy.png");
        game.load.image("rotate","assets/images/rotate.png");

        game.load.spritesheet("pet","assets/images/pet.png",97,83,5);
    }

    function create(){
        let bg = game.add.sprite(0,0,"backyard")

        let arrow1 = game.add.sprite(0,0,"arrow")
        arrow1.anchor.setTo(0.5,0.5)
        arrow1.y = game.world.centerY
        arrow1.x = arrow1.width*0.5
        arrow1.scale.setTo(-1)
        arrow1.inputEnabled = true
        arrow1.direction = "left"
        arrow1.events.onInputDown.add(clickArrow)

        let arrow2 = game.add.sprite(0,0,"arrow")
        arrow2.anchor.setTo(0.5,0.5)
		arrow2.y = game.world.centerY
        arrow2.x = game.width - (arrow2.width*0.5)
        arrow2.inputEnabled = true
        arrow2.events.onInputDown.add(clickArrow)
        arrow2.direction = "right"

        let apple = game.add.sprite(0,0,"apple")
        apple.anchor.setTo(0.5,0.5)
        apple.y = game.world.centerY
        apple.x = game.world.centerX

        let candy = game.add.sprite(0,0,"candy")
        candy.anchor.setTo(0.5,0.5)
        candy.y = game.world.centerY
        candy.x = game.world.centerX

        let rotate = game.add.sprite(0,0,"rotate")
        rotate.anchor.setTo(0.5,0.5)
        rotate.y = game.world.centerY
        rotate.x = game.world.centerX

        let pet = game.add.sprite(0,0,"pet",0)
        pet.anchor.setTo(0.5,0.5)
        pet.y = game.world.centerY
        pet.x = game.world.centerX
        pet.animations.add("animate",[0,1,2,1,0,1],3,true) 
        pet.animations.play("animate")
    }

    function clickArrow(sprite){

        /*
        if(isMoving){
            return
        }
        isMoving = true

       if(sprite.direction == "left"){
           if(index == 0){
               index = animals.length - 1
           }else{
                index = index - 1
           }

           newAnimal = game.add.sprite(0,game.world.centerY,animals[index])
           newAnimal.anchor.setTo(0.5,0.5)
           newAnimal.x = game.width + newAnimal.width
          // newAnimal.y = game.world.centerY

           let tweenCurrent = game.add.tween(currentAnimal).to({x:-currentAnimal.x},200)
           arrowSprite = sprite
           arrowSprite.alpha = 0.5
           tweenCurrent.start() 

           let tweenNew = game.add.tween(newAnimal).to({x:game.world.centerX},200)
           tweenNew.onComplete.add(onCompleteTween)
           tweenNew.start() 

       }else{
            if(index == animals.length - 1){
            index = 0
         }else{
             index = index + 1
            }

            newAnimal = game.add.sprite(0,game.world.centerY,animals[index])
            newAnimal.anchor.setTo(0.5,0.5)
            newAnimal.x = -newAnimal.width
           // newAnimal.y = game.world.centerY
 
            let tweenCurrent = game.add.tween(currentAnimal).to({x:game.width + newAnimal.width},200)
            arrowSprite = sprite
            arrowSprite.alpha = 0.5
            tweenCurrent.start() 
 
            let tweenNew = game.add.tween(newAnimal).to({x:game.world.centerX},200)
            tweenNew.onComplete.add(onCompleteTween)
            tweenNew.start() 
       }
       */
    }

    function onCompleteTween(){
        /*
        currentAnimal.destroy() //destroy por dentro hace la variable nula
        currentAnimal = newAnimal
        isMoving = false
        arrowSprite.alpha = 1
        // currentAnimal.kill() //kill desactiva el objeto y ya no lo considera
        */
     }

    function update(){
       // console.log("update");
    }

    //ancho, alto, tipo de render y tipo de div
}