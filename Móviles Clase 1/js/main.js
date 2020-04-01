window.onload = function(){
    console.log("HOLA MUNDO");
    let game = new Phaser.Game(640,360,Phaser.AUTO,'content',
    {
        //primero key del objeto (inamovible), el segundo es el nombre de la función
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
    }

    function create(){
        //let es como var
        //posicion en x, posicion en y, y nombre en el diccionario
        let bg = game.add.sprite(0,0,"background")
       // console.log("creation");
    }

    function update(){
        //console.log("update");
    }

    //ancho, alto, tipo de render y tipo de div
}