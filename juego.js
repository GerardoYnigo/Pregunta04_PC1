var balas;
var fondoJuego;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var Juego={
	preload: function () {
		juego.load.image('personaje','img/personaje.png');
		juego.load.image('bg','img/bg.png');
	},
	create: function(){
		fondoJuego = juego.add.tileSprite(0,0,400,540,'bg');

		juego.physics.startSystem(Phaser.Physics.ARCADE);

		personaje = juego.add.sprite(juego.width/2, 485, 'personaje');
		personaje.anchor.setTo(0.5);
		juego.physics.arcade.enable(personaje, true);

		//definir el puntaje 
		juego.add.text(15,50, "Gerardo Yñigo Yupanqui", {font:"15px Arial", fill:"#ffffff"});

		teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

	},

	update: function(){
		//animar fondo
		fondoJuego.tilePosition.y += 1;

		if(teclaDerecha.isDown){
            personaje.x++;
        }
        else if(teclaIzquierda.isDown){
            personaje.x--;
        }
        else if(teclaArriba.isDown){
            personaje.y--;
        }
        else if(teclaAbajo.isDown){
            personaje.y++;
        }
	},
};