function clickableImager(n,x,y,s){
    this.image1 = loadImage("assets/begin.png");
    this.scale = s; 
    this.posX=x;
    this.posY=y;

    this.drawMe = function() {
      
       image(this.image1, (this.posX*width)-(this.image1.width*this.scale*0.5), 
             (this.posY*height)-(this.image1.height*this.scale*0.5),
             this.image1.width*this.scale, 
             this.image1.height*this.scale);
    };

};