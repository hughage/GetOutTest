var q1 = {
    question: "On a scale of 1 to 5, how cool is it to lift serious weights, with 5 being as cool as a super conductor, and 1 being as lame as exerstential dread?",
    answer: -1
};

var q2 = {
    question: "On a scale of 1 to 5, how cool is it to lift really serious weights, with 5 being as cool as cat in a fridge, and 1 being as lame as the TV show friends?",
    answer: -1
};

var q3 = {
    question: "On a s, how cool is it to lift serious weights, with 5 being as cool as a super conductor, and 1 being as lame as exerstential dread?",
    answer: -1
};


var q4 = {
    question: "On a scale of 1 to 5, how cool is it to lift serious weights, with 5 being as cool as a super conductor, and 1 being as dread?",
    answer: -1
};

var q5 = {
    question: "On a scale of 1 to 5, how scale is it?",
    answer: -1
};


var questionSelect = 0;
var questions =[];
var xPos = 0;

var textColor = [184,230,194];
var horizontalOffset = headerSize;
var verticalOffset = headerSize;
var textOffset = 20;

var butSelected =0;
var hoverSelected =2;


function loadQuestions(){
    questions.push(q1);
    questions.push(q2);
    questions.push(q3);
    questions.push(q4);
    questions.push(q5);
    var xPos = width;

}


function drawQuestion(){

    updateSlide();
    drawTextArea();
    fill(textColor);
    drawQuestionText();
    drawArrowSelection();
    drawAnswerBoxes();

}

function drawQuestionText(){

    textSize(30);
    textAlign(CENTER);
    var QuestionPadding = 10;
    var tw = textAreaWidth -(2*QuestionPadding);
    var th = textAreaHeight -(2*QuestionPadding)
    var x0 = (width/2) - (tw/2) +xPos;
    var y0 = headerSize+QuestionPadding;
    text(questions[questionSelect].question,x0,y0,tw,th);
}

function drawTextArea(){
    noStroke();
    fill(255)
    textAreaHeight = height - (2*verticalOffset);
    textAreaWidth = width-(2*horizontalOffset);
    rect(headerSize,verticalOffset, textAreaWidth ,textAreaHeight,10);
}

function updateSlide(){
    var moveSpeed = 80;
    if(xPos==0){     
    } else if(xPos<=moveSpeed && xPos>=-moveSpeed){
        xPos =0 ;
        print("zero dude");
    }else if(xPos>moveSpeed){
        xPos = xPos-moveSpeed;
        print(xPos);
    } else if (xPos<-moveSpeed){
        xPos = xPos+moveSpeed;
        print(xPos);
    }
}

function drawAnswerBoxes(){
    var answerBoxPadding = 10;
    var aw = (textAreaWidth)/questions.length;
    var ah = (textAreaHeight/3);
    var x0 = ((width/2)-(textAreaWidth/2));
    var y0 = ((textAreaHeight/2))+headerSize;
    for(var i =0; i< questions.length; i++){
        stroke(textColor);
        if(butSelected == i){
            noFill();
            ellipse(x0+(i*aw)+(aw/2),y0-(ah/3),40,40);
            fill(textColor);
            
        } else {
            fill(255);
        }       
        ellipse(x0+(i*aw)+(aw/2),y0-(ah/3),30,30);
    }
    textAlign(CENTER);
    fill(textColor);
    text("Mostly agree",x0-(aw/2),y0,aw*2,ah/2);
    text("Mostly disagree",x0+((questions.length-1)*aw)-(aw/2),y0,aw*2,ah/2);
    text("Neither disagree or agree",x0+(((questions.length-1)/2)*aw)-(aw/2),y0,aw*2,ah/2);
}


function drawArrowSelection(){

    var arrowHeight = headerSize+(5*(textAreaHeight/6))-(right.height/2);
    var spacingBetween = 50;
    var lx = (width/2)-spacingBetween-left.width;
    var rx = (width/2)+spacingBetween;
    if (mouseY<headerSize+textAreaHeight && mouseY>headerSize+(2*textAreaHeight)/3){
        if(mouseX<(width/2)){
            image(altLeft,lx,arrowHeight);
            image(right,rx,arrowHeight);
        }else if(mouseX>(width/2)){
            image(left,lx,arrowHeight);
            image(altRight,rx,arrowHeight);
        } 
    } else{
        image(left,lx,arrowHeight);
        image(right,rx,arrowHeight);
    }
}

function nextQuestion(){

    if (questionSelect<questions.length-1){
        xPos=width;
        questionSelect++;       
    } 

}


function previousQuestion(){
    if (questionSelect>0){
        xPos = - width;
        questionSelect--;       
    } 

}


