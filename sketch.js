var welcome;
var welcomeIMG
var gameState = 0
var playerCount
var player
var database
var sprite
var spriteIMG
var story2
var story2Image
var story3
var story3Image
var img1
var img2
var sprite2
var sprite3
var sprite4
var img4
var sprite5
var img5
var cont
var contimg
var start
var startIMG
var bg2
var bg2Image
var choose 
var chooseImage
var plr
var plrImage 
var castle2
var castle2Image 
var boom 
var boomImage
var crowbar
var crowbarImage
var axe 
var axeImage
var hammer 
var hammerImage
var aidkit 
var aidkitImage
var jacket
var jacketImage
var knife1
var knife1Image
var knife2
var knife2Image
var knife3
var knife3Image
var gun1
var gun1Image
var gun2
var gun2Image
var police1
var police1Image
var police2
var police2Image
var police3
var police3Image
var police4
var police4Image 
var nextlevel
var nextLevelImage
var bar 
var barImage
var strengthBar
var strengthBarImage
var strength
var strengthImage
var weakness
var weaknessImage
var castle3
var castle3Image 
var sittingPlrImage
var money
var moneyImage
var backgroundMusic
function preload(){
  welcomeIMG = loadImage("2.jpg")
  greetingIMG = loadImage("welcome.jpg")
  //img1 = loadImage("3.jpg")
  nextIMG= loadImage("30.png")
  storyIMG = loadImage("part1.png")
  story2Image=loadImage("part2 .jpg")
  story3Image=loadImage("part3.jpg")
  rulesIMG = loadImage("34.jpg")
  contimg = loadImage("continue.png")
  startIMG = loadImage("start.jpg")
  bg2Image=loadImage("bg2.jpg")
  chooseImage=loadImage("37.jpg")
  plrImage=loadImage("player prop.png")
  castle2Image=loadImage("castle2.png")
  boomImage=loadImage("28.png")
  crowbarImage=loadImage("27.png")
  axeImage=loadImage("26.png")
  hammerImage=loadImage("25.png ")
  aidkitImage=loadImage("24.png")
  jacketImage=loadImage("23.png")
  knife1Image=loadImage("22.png")
  knife2Image=loadImage("21.png")
  knife3Image=loadImage("20.png")
  gun1Image=loadImage("19.png")
  gun2Image=loadImage("gun2.png")
  police1Image=loadImage("police1.png")
  police2Image=loadImage("police2.png")
  police3Image=loadImage("policemen3.png")
  police4Image=loadImage("police4.png")
  nextLevelImage=loadImage("36.png")
  barImage=loadImage("38.png")
  strengthBarImage=loadImage("41.jpg")
  weaknessImage=loadImage("39.png")
  strengthImage=loadImage("40.png")
  sittingPlr=loadImage("1__.png")
  moneyImage=loadImage("money.png")
  backgroundMusic=loadSound("backgroundMusic.mp3")
  //castle3Image=loadImage("castle10.jpg")
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();

  sprite = createSprite(500,300,20,20)
  sprite.addImage(welcomeIMG);
  sprite.scale = 0.6
  //sprite.visible = false

  greeting= createSprite(850,490,20,20);
  greeting.addImage(greetingIMG);
  greeting.scale = 2.5
  greeting.visible = false

  next = createSprite(900,500,20,20);
  next.addImage(nextIMG);
  next.scale = 0.5
  next.visible = false

  storyPage = createSprite(500,300,20,20);
  storyPage.addImage( storyIMG);
  storyPage.scale = -1
  storyPage.visible = false

  storyPage2= createSprite(500,300.20,20);
  storyPage2.addImage(story2Image);
  storyPage2.visible = false

 storyPage3= createSprite(500,300.20,20);
 storyPage3.addImage(story3Image);
 storyPage3.visible = false       

  rulesPage= createSprite(500,300.20,20);
  rulesPage.addImage(story2Image);
  rulesPage.scale=-0.2
  rulesPage.visible = false

  cont = createSprite(900,500,20,20);
  cont.addImage(contimg);
  cont.scale = 0.33
  cont.visible = false

  starting = createSprite(850,500,250,280)
  starting.addImage(startIMG)
  starting.scale = 0.3
  starting.visible = false

  bg2 = createSprite(500,300,20,20)
  bg2.addImage(bg2Image)
  bg2.scale = 0.55
  bg2.visible = false
  
  choose = createSprite(475,80,20,20)
  choose.addImage(chooseImage)
  choose.scale = 0.3
  choose.visible = false
  
  plr = createSprite(500,0,20,20)
  plr.addImage(plrImage)
  plr.scale = 0.75
  plr.visible = false
    
  castle2 = createSprite(500,300,20,20)
 castle2.addImage(castle2Image)
  castle2.visible = false
     
  boom = createSprite(336,520,20,20)
  boom.addImage(boomImage)
  boom.scale = 0.33
  boom.visible = false
    
  crowbar = createSprite(80,280,20,20)
  crowbar.addImage(crowbarImage)
  crowbar.scale = 0.33
  crowbar.visible = false
    
  axe = createSprite(833,48,20,20)
  axe.addImage(axeImage)
  axe.scale = 0.2
  axe.visible = false
    
  hammer = createSprite(650,328,20,20)
  hammer.addImage(hammerImage)
  hammer.scale = 0.33
  hammer.visible = false
    
  aidkit = createSprite(820,200,20,20)
  aidkit.addImage(aidkitImage)
  aidkit.scale = 0.2
  aidkit.visible = false
    
  jacket = createSprite(812,372,20,20)
  jacket.addImage(jacketImage)
  jacket.scale = 0.22
  jacket.visible = false
    
  knife1 = createSprite(520,464,20,20)
  knife1.addImage(knife1Image)
  knife1.scale = 0.33
  knife1.visible = false
    
  knife2 = createSprite(260,150,20,20)
  knife2.addImage(knife2Image)
  knife2.scale = 0.44
  knife2.visible = false
    
  knife3 = createSprite(234,30,20,20)
  knife3.addImage(knife3Image)
  knife3.scale = 0.33 
  knife3.visible = false
      
  gun1 = createSprite(60,501,20,20)
  gun1.addImage(gun1Image)
  gun1.scale = 0.32
  gun1.visible = false   

  gun2 = createSprite(30,92,20,20)
  gun2.addImage(gun2Image)
  gun2.scale = 0.44
  gun2.visible = false
        
  police1 = createSprite(200,100,20,20)
  police1.addImage(police1Image)
  police1.scale = 0.30
  police1.visible = false
        
  police2 = createSprite(500,300,20,20)
  police2.addImage(police2Image)
  police2.scale = 0.35
  police2.visible = false
        
  police3 = createSprite(700,450,20,20)
  police3.addImage(police3Image)
  police3.scale = 0.35
  police3.visible = false
  
  police4 = createSprite(700,450,20,20)
  police4.addImage(police4Image)
  police4.scale = 0.35
  police4.visible = false

  nextlevel = createSprite(900,500,20,20);
  nextlevel.addImage(nextLevelImage);
  nextlevel.scale = 0.5
  nextlevel.visible = false
  
  strength = createSprite(500,300,20,20)
  strength.addImage(strengthImage)
  strength.scale = 0.55
  strength.visible = false 

  strengthBar = createSprite(500,300,20,20)
  strengthBar.addImage(strengthBarImage)
  strengthBar.scale = 0.55
  strengthBar.visible = false
  
  weakness = createSprite(500,300,20,20)
  weakness.addImage(weaknessImage)
  weakness.scale = 0.55
  weakness.visible = false
  
  bar = createSprite(500,300,20,20)
  bar.addImage(barImage)
  bar.scale = 0.55
  bar.visible = false 

 //castle3 = createSprite(500,300,20,20)
  //castle3.addImage(castle3Image)
  //castle3.visible = false
  game = new Game();
  game.start();
}

function draw() {
  background("black");  
  //backgroundMusic.play()
 
  if(playerCount === 1){
    game.update(1);
    greeting.visible = true
    next.visible=true
    story()
    rules()
    levelstart()
    level1()
    level2()
   // level3()
  }
  
  if(gameState === 1){
    game.play();
  }
  // if(gameState===2){
  //   fill("white")
  //   text("hello",500,300)
  // }
  drawSprites()
  fill("blue")
  textSize(50)
  text(mouseX+","+mouseY,mouseX,mouseY)
}

