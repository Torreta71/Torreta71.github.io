// JavaScript source code
function Placeholder() {
    var inputText = document.getElementById("inputText");
    if (inputText.textContent == "") {
        inputText.textContent = "Ingresa tu texto aqu\u00ED..." 
    }
    

}
function ClearText() {
    document.getElementById("inputText").textContent = "";
}

function CheckLetters() {

    var letters = /^[a-z ]+$/;
    var inputText = document.getElementById("inputText").value;
    var chars = [...inputText];
    document.getElementById("alertText").style.fontSize = "22px";
    document.getElementById("alertText").style.color = "#FEFEFE";
    document.getElementById("alertText").style.fontWeight = "normal";
    if (inputText != "") {
        for (var i = 0; i < chars.length; i++) {
            if (!chars[i].match(letters)) {
                
                chars[i] = "";
                var newText = chars.join("");
                document.getElementById("inputText").value = newText;
                document.getElementById("alertText").style.fontSize = "25px";
                document.getElementById("alertText").style.color = "yellow";
                document.getElementById("alertText").style.fontWeight = "bold";
                return;
            }
    }
    }
    
}


var arr;

function Encrypt() {
    var inputText = document.getElementById("inputText").value;
    arr = [...inputText];
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] == "a") {
            arr[i] = "ai";
        }
        if (arr[i] == "e") {
            arr[i] = "enter";
        }
        if (arr[i] == "i") {
            arr[i] = "imes";
        }
        if (arr[i] == "o") {
            arr[i] = "ober";
        }
        if (arr[i] == "u") {
            arr[i] = "ufat";
        }
    }

    var encryptedText = arr.join("");
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = encryptedText;
}
function Decrypt() {
    var inputText = document.getElementById("inputText").value;
    arr = [...inputText];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == "a") {
            arr[i + 1] = "";
        }
        if (arr[i] == "e") {
            arr[i + 1] = "";
            arr[i + 2] = "";
            arr[i + 3] = "";
            arr[i + 4] = "";
        }
        if (arr[i] == "i") {
            arr[i + 1] = "";
            arr[i + 2] = "";
            arr[i + 3] = "";
        }
        if (arr[i] == "o") {
            arr[i + 1] = "";
            arr[i + 2] = "";
            arr[i + 3] = "";
        }
        if (arr[i] == "u") {
            arr[i + 1] = "";
            arr[i + 2] = "";
            arr[i + 3] = "";
        }
    }

    var encryptedText = arr.join("");
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = encryptedText;
}
function CopyResult() {
    var text = document.getElementById("outputText").value;
    navigator.clipboard.writeText(text);
}
function CopyAndPasteResult() {
    var text = document.getElementById("outputText").value;
    navigator.clipboard.writeText(text);
    document.getElementById("inputText").value = text;
}

