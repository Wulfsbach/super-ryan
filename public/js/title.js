var startScene = new Phaser.Scene('start');

var bg;
//loads images//
startScene.preload= function(){
    this.load.image('bg','./assets/images/pixelCity.png');
    this.load.spritesheet('sk8','./assets/images/sk8.png', {frameWidth: 361.8, frameHeight: 362,endFrame:135});
    this.load.image('Title','./assets/images/candyquest.png');
    this.load.image('startbtn','./assets/images/button.png');
    this.load.image('hsbtn','./assets/images/highscore.png');
    this.load.audio('skate', '../assets/skate.mp3');
}

//music
var music;

//creation central//
startScene.create= function(){
     bg = this.add.tileSprite(400,300,800,600,'bg');
    title= this.add.image(400,-100,'Title');
    music = this.sound.add('skate');
    music.play();


//start button//
startbtn = this.add.sprite(400,300,'startbtn').setInteractive();
startbtn.on('pointerdown', function() {window.location.href = "/create"});
hsbtn = this.add.sprite(400,370,'hsbtn').setInteractive();
hsbtn.on('pointerdown', function() {window.location.href = "/highscore"});






startbtn.alpha = 0;
hsbtn.alpha = 0;


var tween = this.tweens.add({
    targets: startbtn,
    alpha:{value:1, delay:8000}
});

var tween = this.tweens.add({
    targets: hsbtn,
    alpha:{value:1, delay:8000}
})


// Below is the cursor hover option//
// this.startBtn = this.on('pointerover',function())



//version text//
var text =this.add.text(10,580,'', {font: '16px Courier. fill: #ffffff'});

text.setText([
    'Version: ' + game.config.gameVersion
]);


//tween for animations//

var tween = this.tweens.add({
    targets: title,
    props:{
        y: {value:100, duration:1000, ease:'Bounce.easeInOut',delay:7000}
    }
})

var config = {
    key:'skate',
    frames: this.anims.generateFrameNumbers('sk8', { start:45, end:64, first:45}),
    frameRate: 5,
   
};
    this.anims.create(config);
    var sk8 = this.add.sprite(-90,430,'sk8');
    sk8.anims.play('skate');



    var tween = this.tweens.add({
        targets: sk8,
        props:{
            x: {value:'+=800',duration: 3000, ease:'Power2'}
        },
        yoyo:true,
        
        
        delay:2000
    });

 
    
    
}


startScene.update= function(){

var Tile= bg.tilePositionX+=2;


    

   
};
//end of start screen//












gameWidth = window.innerWidth - 200;
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [startScene],
    version: '1.0b:Ryan is lame and didnt like Super Ryan',
    physics: {
            default: 'arcade',
            arcade: {
              gravity: {y: 500},
                    debug: false
                },
            }
  };
  
  var game = new Phaser.Game(config);


  
