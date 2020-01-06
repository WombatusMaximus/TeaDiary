$(document).ready(documentLoaded());

function documentLoaded() {
    var displayer = new teaListDisplayer("#TeaList");
    displayer.loadAndDisplay();
}