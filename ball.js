class Ball{
    constructor(x,y,r){
        var options = {
            isStatic:false
        }

        this.x = x; 
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r,options);
World.add(world,this.body);

    }

    display(){

push()
translate(this.body.position.x, this.body.position.y)
ellipse(0,0,this.r,this.r)
pop()

    }
}