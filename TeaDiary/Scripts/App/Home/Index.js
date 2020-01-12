$(document).ready(documentLoaded);

var teaDisplayer;
var teaSessionDisplayer;

function documentLoaded() {
    teaDisplayer = new TeaListDisplayer({
        title: "#TeaListTitle",
        body: "#TeaList"
    });
    teaSessionDisplayer = new TeaSessionListDisplayer("#TeaSessionList");

    $("#SearchType")
        .append($("<option>")
            .val(SEARCT_TYPE.NAME)
            .html("By " + SEARCT_TYPE.NAME));
    $("#SearchType")
        .append($("<option>")
            .val(SEARCT_TYPE.TYPE)
            .html("By " + SEARCT_TYPE.TYPE));

    teaDisplayer.loadAndDisplay();
    teaSessionDisplayer.loadAndDisplay();
}

function onSearchClick() {
    if ($("#SearchRequest").val() === "") {
        teaDisplayer.loadAndDisplay();
    } else {
        var search = $("#SearchType").val() === SEARCT_TYPE.NAME ? apiQueries.searchByName : apiQueries.searchByType;

        search(
            $("#SearchRequest").val(),
            $("#IsStrictSearch").prop("checked"),
            (teaList) => teaDisplayer.display(teaList)
        );
    }
}