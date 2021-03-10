var dog,happyDog;
var button1,button2
var lastFeed;
var database
var foodObj
var feedTime;
function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  database=firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button1=createButton("Add the Milk")
  button1.position(700,95)
  button1.mousePressed(addFood)

  button2=createButton("Feed the dog")
  button2.position(800,95)
  button2.mousePressed(feedDog)
foodObj=new Food();
feedTime=database.ref('lastTime');
feedTime.on("value",function (data) {
  lastFeed=data.val()
})

}

function draw() {
  background(46,139,87);
  foodObj.display()
  readStock()
drawSprites()
  fill ('red');
  textSize(20)
  text("Dog name :Tommy",50,50)
if (lastFeed!=undefined) {
  if (lastFeed>=12) {
    text("LastFeed :"+lastFeed%12+" PM",350,50)
  }
  else if(lastFeed===12){
   
    text("LastFeed : 12 PM",350,50)

  }
  else {
    text("LastFeed :"+lastFeed+" `AM",350,50)

  }
}
}
  //function to read food Stock
  function readStock() {
   food=database.ref('foodStock');
   food.on("value",function (data) {
    foodS=data.val();

   })
   }
function feedDog() {
dog.addImage(happyDog)
if (foodS<=0) {
  foodS*=0;
  
} else {
  
  foodS--;
}
  database.ref('/').update({
    foodStock:foodS,
    lastTime:hour()
  })

}
//function to add food in stock
function addFood() {
  foodS++;

  
  database.ref('/').update({
    foodStock:foodS
  })
}