$(document).ready(documentLoaded);

function documentLoaded() {
    var displayer = new TeaListDisplayer("#TeaList");
    displayer.loadAndDisplay();
}