//Initialize Phaser Engine. Create a 400x490px game;

var game= new Phaser.Game(400,490,Phaser.AUTO,'gameDIV');

//Create our 'manin' state that will contain the game
//This is the body of the game itself
//It should contain all the code related to the game itself

var mainState= {
   preload:function(){
//This function will execute at the beginning
//Whiach is where we'll load our assets for the game


//Set the bacckgound color of the game
 game.stage.backgroundColor="#71C5CF";
 
game.load.image('bird','assets/bird.png')

game.load.image('pipe','assets/pipe.png')

 },

create: function() { 
 //This function is called right after preload function
 //This is where we set up in the game assats from earlier
 
game.physics.startSystem(Phaser.Physics.ARCADE);

this.bird = this.game.add.sprite(100,245,'bird');

//Now we have a bird and gravity...we need to tell the bird
// to react to gravity

game.physics.arcade.enable(this.bird);

this.bird.body.gravity.y = 1000;
 },
 update: function() {
 //This functiom runs 60 times per second
 },
 };
 
 
 //Add and start the 'mainState' to start the game
 game.state.add('main', mainState);
 game.state.start('main');
