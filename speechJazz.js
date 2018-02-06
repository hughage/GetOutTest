var userSpeech = "Word up bruv, Im Zentor, designed to make you get out more.";
var voiceNumber = 0;
var voiceName = "Daniel";
var voiceOptionsBox;

function voiceSetup(){
    voiceOptionsBox = createSelect();
    voiceOptionsBox.position((width/2)-60,height-30);
    voiceOptionsBox.changed(newVoicePlease);
}

function putVoicesInBox(){
     for(var i = 0;i<speech.voices.length;i++){
        voiceOptionsBox.option(speech.voices[i].name);
    }
    speech.setVoice(voiceNumber);
    speak(userSpeech);
}

function speak($){
    speech.speak($);
}

function newVoicePlease(){
    var temp =0;
    for(var i = 0;i<speech.voices.length;i++){
        if(speech.voices[i].name.includes(voiceOptionsBox.value())){
            temp = i;
            i = speech.voices.length;
        }
    }
    voiceNumber=temp;
    speech.setVoice(temp);
    var newVoiceSpeech = "Hello, my name is...."+voiceOptionsBox.value();
    speak(newVoiceSpeech);
}