class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,	
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.r=r;
		
        this.image=loadImage("paper.png");
		this.body=Bodies.circle(x, y, r , options);


 		World.add(world, this.body);

	}
	display()
	{
			//background(100)
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER);
            image(this.image,0,0,33,33)
			//strokeWeight(4);
			fill(255)
			//ellipse(0,0,this.r,);
			pop()
			
	}

}