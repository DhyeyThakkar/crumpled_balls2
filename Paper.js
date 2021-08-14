class Paper{

    constructor(x, y, radius) {

        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.circle(x, y, radius, options)

        World.add(world, this.body);

        this.radius = radius;

        this.image = loadImage('paper.png')
    }


    display() {

        imageMode(RADIUS);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        

    }
}   


