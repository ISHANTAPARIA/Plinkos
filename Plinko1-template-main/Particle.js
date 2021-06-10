class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: false
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        var rand = Math.round(random(1, 6));
        //console.log(rand);
        switch (rand) {
            case 1: fill("red");
                break;
            case 2: fill("blue");
                break;
            case 3: fill("green");
                break;
            case 4: fill("yellow");
                break;
            case 5: fill("purple");
                break;
            case 6: fill("orange");
                break;
        }
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

};