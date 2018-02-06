function beginPage(){

    this.beginText = "begin";
    this.tSize = 30;

    this.setUp = function(){
    }

    this.draw = function(){  
        fill(255);
        noStroke();
        rect((width/2)-100,(height/2)-50,200,100,10);
        fill(184,230,194);     
        textSize(this.tSize);
        text(this.beginText,width/2,height/2); 
    }

    this.reset = function(){
        print("bang");
    }
}

function anotherPage(){

    this.beginText = "another";
    this.tSize = 20;

    this.setUp = function(){
    }

    this.draw = function(){  
        fill(0);
        noStroke();
        rect((width/2)-100,(height/2)-50,200,100,10);
        fill(184,230,194);
        textSize(this.tSize);
        text(this.beginText,width/2,height/2); 
    }

    this.reset = function(){
        print("bang");
    }
}

function introPage(){

    this.image1 = loadImage("assets/sloth.png");

    this.reset = function(){
        this.image1 = loadImage("assets/sloth.png");
        print("bang");
    }

    this.setUp = function(){
    }

    this.draw = function(){  
        this.image1.resize(0, height/2);
        image(this.image1,(width/2)-(this.image1.width/2),height-this.image1.height);
    }
}




