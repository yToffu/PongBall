var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d5c007b6-786b-4efc-83dc-98c15a767054","7e3e89ac-2cb7-4268-b0db-8c3546afa205","0c82fd3e-0772-47ef-9844-210dc16de3d2"],"propsByKey":{"d5c007b6-786b-4efc-83dc-98c15a767054":{"name":"P1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MSuQhMGhfQ08PSDBoSiLBERY0bdZrL13","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d5c007b6-786b-4efc-83dc-98c15a767054.png"},"7e3e89ac-2cb7-4268-b0db-8c3546afa205":{"name":"Botzin","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GzEJM5izHAFLodNsg4ratthQ4SxyeISJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7e3e89ac-2cb7-4268-b0db-8c3546afa205.png"},"0c82fd3e-0772-47ef-9844-210dc16de3d2":{"name":"futebol","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 //Variaveis

var raquete= createSprite(380,200,10,100);
raquete.shapeColor="gray";
raquete.velocityY=0;
    
var botzin= createSprite(20,200,10,100);
botzin.shapeColor="gray";
botzin.velocityY=0;
botzin.velocityX=0;

var ball= createSprite(200,200,10,10);
ball.shapeColor="yellow";
ball.velocityX=0;
ball.velocityY=0;

 //Draw
function draw() {
  background('white');
 
if(ball.bounceOff(raquete)){
   playSound("assets/category_projectile/game_ball_bounce.mp3", false);
 }
 
if(ball.bounceOff(botzin)){
   playSound("assets/category_projectile/game_ball_bounce.mp3", false);
 }

 
 // Eventos das Função
  
  IaDoBotzin();
  Gameplay();
  Respawn();
  Iniciar();
  Linhas();
  
 //Criar as paredes e rebater nos sprites
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(botzin);
  ball.bounceOff(raquete);
  raquete.bounceOff(topEdge);
  raquete.bounceOff(bottomEdge);
  drawSprites();
  
}


//Functions 

function Linhas() {
  
  //Divisão das areas - DRY
  for (var n = 0; n<400;n=n+20) {
    line(200,n,200,n+8);
  }
  
}

function Respawn() {
  
  //Respawn da bola
  if(ball.x>400) {
    ball.x =200;
    ball.y =200;
    
  }
  
}

function Iniciar() {
  
  //Start
  if(keyDown('Space')) {
    ball.velocityX=4;
    ball.velocityY=5;
  }
  
}

function Gameplay() {
  
    //Subir
  if(keyDown('up')){
    raquete.y = raquete.y - 10;
  }
  
  //Descer
   if(keyDown('down')){
    raquete.y = raquete.y + 10;
  }
  
}

function IaDoBotzin() {
  
  //Botzin = IA
  botzin.y = ball.y;
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
