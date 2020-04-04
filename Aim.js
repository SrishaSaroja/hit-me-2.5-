class Aim extends BaseClass {
  constructor(x, y){
    super(x,y,20,40);
    this.image = loadImage("sprites/wood1.png");
    this.visibility=255;
  }
 
  display(){
    super.display();
    }
    
};
