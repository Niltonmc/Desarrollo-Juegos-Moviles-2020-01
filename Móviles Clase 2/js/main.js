window.onload = function(){
    console.log("HOLA MUNDO");

    let currentAnimal = {} //{} es para objetos
    let animals = ["sheep","horse","chicken","pig"]
    let isMoving = false
    let index = 0
    let newAnimal = {}
    let arrowSprite = {}
    let game = new Phaser.Game(640,360,Phaser.AUTO,'content',
    {
        //primero key del objeto (inamovible), el segundo es el nombre de la función, si va a ser webgl o canvas, el contenedor div
        preload : preload,
        create : create,
        update : update
    }
    );
    function preload(){
        //console.log("loader");
        //phaser crea un diccionario con rutas a los que les da keys
        //nombre en el diccionario, ruta de la imagen
        game.load.image("background","assets/images/background.png")
        game.load.image("arrow","assets/images/arrow.png")

        game.load.spritesheet("sheep",
		"assets/images/sheep_spritesheet.png",244, 200,3);

        game.load.spritesheet("chicken",
        "assets/images/chicken_spritesheet.png", 131, 200,3)

        game.load.spritesheet("horse",
        "assets/images/horse_spritesheet.png", 212, 200,3)

        game.load.spritesheet("pig",
        "assets/images/pig_spritesheet.png", 297, 200,3)
    }

    function create(){
        //let es como var
        //los objetos tienen un número de capa según se crean
        //posicion en x, posicion en y, y nombre en el diccionario
        let bg = game.add.sprite(0,0,"background")

        let arrow1 = game.add.sprite(0,0,"arrow")
        arrow1.anchor.setTo(0.5,0.5) //si recibe más de un valor, y pones solo 1, toma el valor del primero
        arrow1.y = game.world.centerY
        arrow1.x = arrow1.width*0.5
        arrow1.scale.setTo(-1)
        arrow1.inputEnabled = true
        arrow1.direction = "left" //añade una propiedad de frente
        arrow1.events.onInputDown.add(clickArrow)

        let arrow2 = game.add.sprite(0,0,"arrow")
        arrow2.anchor.setTo(0.5,0.5)
		arrow2.y = game.world.centerY
        arrow2.x = game.width - (arrow2.width*0.5)
        arrow2.inputEnabled = true
        arrow2.events.onInputDown.add(clickArrow)
        arrow2.direction = "right" //añade una propiedad de frente

       
        //let index = game.rnd.integerInRange(0,animals.length-1)
        //cuarto parametro es el frotograma
        currentAnimal = game.add.sprite(0,0,animals[index],0)
        currentAnimal.anchor.setTo(0.5,0.5)
        currentAnimal.x = game.world.centerX
        currentAnimal.y = game.world.centerY
        //nombre de la animación, añade un array de fotogramas, número de fotogramas por segundo, si loopea o no
        currentAnimal.animations.add("animate",[0,1,2,1,0,1],3,true) 
        currentAnimal.animations.play("animate")

       // console.log("creation");
    }

    //recibe que sprite fue el que lanzó el evento
    function clickArrow(sprite){
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
           /*
           //a quien se le hace tween y hacia donde, velocidad
           //1 segundo son 1000 milisegundos
           let tween = game.add.tween(currentAnimal).to({x:currentAnimal.x-40},200)
           tween.start() 
           */
           //currentAnimal.x -= 10
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

           /*
        let tween = game.add.tween(currentAnimal).to({x:currentAnimal.x+40},200)
        tween.start() 
        */
        //currentAnimal.x += 10
       }
    }

    function onCompleteTween(){
        currentAnimal.destroy() //destroy por dentro hace la variable nula
        currentAnimal = newAnimal
        isMoving = false
        arrowSprite.alpha = 1
        // currentAnimal.kill() //kill desactiva el objeto y ya no lo considera
     }

    function update(){
       // console.log("update");
    }

    //ancho, alto, tipo de render y tipo de div
}