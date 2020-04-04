window.onload = function(){
    let game = new Phaser.Game(360,640,Phaser.AUTO)
    //carga la pantalla
    game.state.add("Preload", Preload) //nombre del diccionario, nombra de la clase que usaré
    //indica cual es la pantalla inicial
    game.state.start("Preload") //
}
