var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector('#output');

var serverURL="https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(output){
    return serverURL + "?" +"text= "+ output
}

function errorHandler(error)
{
    console.log("error Occured"+error);
    alert("something Went Wrong");
}


function clickHandler(){
   
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
     var translatedTxt=json.contents.translated;
     outputDiv.innerHTML=translatedTxt;
    })
    
    .catch(errorHandler)
};

btnTranslate.addEventListener('click',clickHandler)