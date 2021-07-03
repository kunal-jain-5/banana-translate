var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverurl = "	https://api.funtranslations.com/translate/minion.json"

function gettranslationurl(text) {
    return serverurl + "?" + "text=" + text
}

function errorhandler(error) {
    console.log("error occured", error)
}

function clickhandler() {
    var inputtext = txtinput.value
    fetch(gettranslationurl(inputtext))
        .then(Response => Response.json())
        .then(json => {
            outputdiv.innerText = json.contents.translated
        })
        .catch(errorhandler)
};

btntranslate.addEventListener("click", clickhandler)