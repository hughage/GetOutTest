var currectText = "hello this is some text and it is really good text frogs and unicons flying the sea and over it too, burgers and houses; and houses and burgers.";




function drawText(){
    fill(255)
    rect(horizontalOffset,verticalOffset, width-(2*horizontalOffset), height - (2*verticalOffset),10);
    fill(textColor);
    textSize(30);
    text(currectText,horizontalOffset+textOffset,verticalOffset+textOffset,width-(2*horizontalOffset)-(2*textOffset), height - (2*verticalOffset)-(2*textOffset));
}