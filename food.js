var foodStock1
class Food{

    constructor(){
        this.food=database.ref('foodStock');
        this.food.on("value",function (data) {
        
             foodStock1= data.val();
        //   console.log(foodStock1);
        })
        this.image=loadImage("Milk.png");
        
    }
    
    
    display(){
        var x=80,y=100;
        
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        
        if (foodStock1!=0) {
        // console.log(foodStock1);
        for (let i = 0; i < foodStock1; i++) {
            if (i%10===0) {
                x=80;
                y+=50;
            }
    image(this.image,x,y,50,50);
    x+=30;
}
}
}
}