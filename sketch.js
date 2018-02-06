var pages =[];
var currentPage=0;
var topLeftLogo;

function setup() {
    createCanvas(windowWidth, windowHeight);
    topLeftLogo = loadImage("assets/topLeftLogoSmall.png");
    pages.push(new beginPage());
    pages.push(new anotherPage()); 
    pages.push(new introPage());
    textAlign(CENTER);
}

function draw() {
    background(184,230,194);
    drawHeader();
    pages[currentPage].draw();
}

function drawHeader(){
    image(topLeftLogo,10,10);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    pages[currentPage].reset();
}

function mousePressed() {
    if(currentPage<pages.length-1){
        currentPage++;
    } else{
        currentPage =0;
    }
    
}
