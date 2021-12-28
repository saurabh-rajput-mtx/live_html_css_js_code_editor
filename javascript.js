function run() {
    let htmlCode = document.querySelector("#htmlCode-id").value;
    let cssCode = "<style>" + document.querySelector("#cssCode-id").value + "</style>";
    let javaScriptCode = document.querySelector("#javaScriptCode-id").value;
    let OuputCode = document.querySelector("#Output-div");
    OuputCode.contentDocument.body.innerHTML = htmlCode + cssCode
    OuputCode.contentWindow.eval(javaScriptCode)
}
let htmlCode = document.querySelector("#htmlCode-id").addEventListener("keyup", run);
let cssCode = document.querySelector("#cssCode-id").addEventListener("keyup", run);