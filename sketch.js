var pages =[];
var currentPage=0;
//header stuff
var topLeftLogo, soundOn, soundOff;
//arrows
var left, right;
// sloth
var sloth;
var voiceOn = false;
var headerSize = 100;
var textAreaHeight;
var textAreaWidth;

var appColour = [184,230,194];

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadHeaderImages();
    pages.push(new beginPage());
    pages.push(new anotherPage()); 
    pages.push(new introPage());
    textAlign(CENTER);
    loadQuestions();
}

function draw() {
    background(appColour);
    drawHeader();
    drawQuestion();
    drawSloth();
    // pages[currentPage].draw();
}

function loadHeaderImages(){
    topLeftLogo = loadImage("assets/topLeftLogoSmall.png");
    soundOn = loadImage("assets/smallVolumeOn.png");
    soundOff = loadImage("assets/smallVolumeOff.png");
    left = loadImage("assets/arrowLeft.png");
    right = loadImage("assets/arrowRight.png");
    altLeft = loadImage("assets/arrowLeftALt.png");
    altRight = loadImage("assets/arrowRightAlt.png");
    sloth = loadImage("assets/sloth.png");
}

function drawHeader(){
    image(topLeftLogo,10,10);
    textSize(20);
    textAlign(RIGHT);
    fill(255);
    if(voiceOn){
        soundOn.resize(0,30);
        image(soundOn,width-(20+(soundOn.width)),10+soundOn.height/2);
        text("Speech is on",width-(30+(soundOn.width)),32+soundOn.height/2);
    } else {
        soundOff.resize(0,30);
        image(soundOff,width-(20+(soundOff.width)),10+soundOff.height/2);
        text("Speech is off",width-(30+(soundOff.width)),32+soundOff.height/2);
    }

}


function drawSloth(){
    sloth.resize(0, height/2);
    image(sloth,(width)-(sloth.width),height-(sloth.height/2));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    pages[currentPage].reset();
}

function mousePressed() {

    if(mouseY<headerSize){
        voiceOn =!voiceOn;
        if(voiceOn){
            putVoicesInBox();
        }
    } 

    if (mouseY<headerSize+textAreaHeight && mouseY>headerSize){
        if(mouseX<(width/2)-(textAreaWidth/2)+left.width){
            previousQuestion();
        }
        if(mouseX>(width/2)+(textAreaWidth/2)-right.width){
            nextQuestion();
        }
    }


}
