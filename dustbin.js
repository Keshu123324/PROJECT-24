class dustbin{

    constructor(x,y)
    {
    var options={
    isStatic:true,
    //restitution:0.3,
   // friction:0.5,
   // density:1.2
    
    }
    this.x=x;
    this.y=y;
    this.height=20;
    this.width=200;
   // this.r=r;
   this.bodyBase=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    World.add(world,this.bodyBase);

    this.bodyleft=Bodies.rectangle(this.x-this.width/2,this.y-this.width/4,this.width/10,this.height*5,options)
    World.add(world,this.bodyleft);

    this.bodyright=Bodies.rectangle(this.x+this.width/2,this.y-this.width/4,this.width/10,this.height*5,options)
    World.add(world,this.bodyright);
    }
    
    display(){
    
    var rectpos=this.bodyBase.position;
    
    push()
    translate(rectpos.x,rectpos.y);
    rectMode(CENTER)
    strokeWeight(3)
    fill(255,0,255)
    rect(0,0,this.width,this.height);
  
    pop()

    var rectposleft=this.bodyleft.position;
    
    push()
    translate(rectposleft.x,rectposleft.y);
    rectMode(CENTER)
    strokeWeight(3)
    fill(255,0,255)
    rect(0,0,this.width/10,this.height*5);
  
    pop()   
    
    var rectposright=this.bodyright.position;
    
    push()
    translate(rectposright.x,rectposright.y);
    rectMode(CENTER)
    strokeWeight(3)
    fill(255,0,255)
    rect(0,0,this.width/10,this.height*5);
  
    pop()   
    
   }
    
    }