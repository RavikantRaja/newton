class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
           // length: 10
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            var offset1 = pointB.x+this.offsetX;
            var offset2 = pointB.y+this.offsetY;
            strokeWeight(4);
            line(pointA.x, pointA.y,offset1, offset2);
        }
}