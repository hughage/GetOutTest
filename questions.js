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
var moveSpeed = 40;

var textColor = [184,230,194];
var horizontalOffset = headerSize;
var verticalOffset = headerSize;
var textOffset = 20;

var butSelected =0;


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
    text(questions[questionSelect].question,horizontalOffset+textOffset+xPos,verticalOffset+textOffset,(textAreaWidth -(2*textOffset)), textAreaHeight/3);
}

function drawTextArea(){
    noStroke();
    fill(255)
    textAreaHeight = height - (2*verticalOffset);
    textAreaWidth = width-(2*horizontalOffset);
    rect(headerSize,verticalOffset, textAreaWidth ,textAreaHeight,10);
}

function updateSlide(){
    if(xPos==0){     
    } else if(xPos<moveSpeed && xPos>-moveSpeed){
        xPos==0;
    }else if(xPos>0){
        xPos = xPos-moveSpeed;
        print(xPos);
    } else {
        xPos = xPos+moveSpeed;
        print(xPos);
    }
}

function drawAnswerBoxes(){
    var answerBoxPadding = 10;
    var aw = ((textAreaWidth)-2*(right.width))/questions.length;
    var ah = 2*(textAreaHeight/3);
    var x0 = ((width/2)-(textAreaWidth/2))+left.width;
    var y0 = ((textAreaHeight/2))+headerSize;
    for(var i =0; i< questions.length; i++){
        stroke(textColor);
        if(butSelected == i){
            fill(textColor);
        } else {
            fill(255);
        }       
        ellipse(x0+(i*aw)+(aw/2),y0,20,20);
    }
    textAlign(CENTER);
    fill(textColor);
    text("Mostly\nagree",x0+(aw/2),y0+60);
    text("Mostly\ndisagree",x0+((questions.length-1)*aw)+(aw/2),y0+60);
    text("Niether\ndisagree or agree",x0+(((questions.length-1)/2)*aw)+(aw/2),y0+60);
}

function drawArrowSelection(){

    var arrowHeight = headerSize+(2*(textAreaHeight/3))-(right.height/2);

    if (mouseY<headerSize+textAreaHeight && mouseY>headerSize){
        if(mouseX<(width/2)-(textAreaWidth/2)+left.width){
            image(altLeft,(width/2)-(textAreaWidth/2), arrowHeight);
            image(right,(width/2)+(textAreaWidth/2)-right.width, arrowHeight);
        }else if(mouseX>(width/2)+(textAreaWidth/2)-right.width){
            image(left,(width/2)-(textAreaWidth/2), arrowHeight);
            image(altRight,(width/2)+(textAreaWidth/2)-right.width, arrowHeight);
        } else {
            image(left,(width/2)-(textAreaWidth/2),arrowHeight);
            image(right,(width/2)+(textAreaWidth/2)-right.width,arrowHeight);
        }
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


