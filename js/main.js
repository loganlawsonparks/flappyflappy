//Initialize Phaser Engine. Create a 400x490px game;

var game= new Phaser.Game(400,490,phaser,AUTO,'gameDIV');

//Create our 'manin' state that will contain the game
//This is the body of the game itself
//It should contain all the code related to the game itself

var mainState= {
   preload:function(){
//This function will execute at the beginning
//Whiach is where we'll load our assets for the game

//Set the bacckgound color of the game
 game.stage.backgroundColor="71C5CF";
 
 },
create; function (){
 //This function is called righ after preload function
 //This is where we set up in the game assats from earlier
 
 },
 update:function(){
 //This functiom runes 60 times per second
 },
 };
 
 
 //Add and start the 'mainState' to start the game
 game.st

 }
