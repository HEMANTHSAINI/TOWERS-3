class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.Visibility=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        if (this.body.speed < 3){
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else {
          push();
          World.remove(world, this.body);
          this.Visibility = this.Visibility-5;
          tint(255, this.Visibility);
          pop();
        }

        }
        score(){
          if(this.Visibility<0&& this.Visibility>-105){
          score=score+1;
          }
          }

      };
