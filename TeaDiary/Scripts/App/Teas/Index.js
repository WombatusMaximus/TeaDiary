$(document).ready(documentLoaded);

function documentLoaded() {
    var displayer = new TeaListDisplayer({
        body:"#TeaList"
    });
    displayer.loadAndDisplay();
}