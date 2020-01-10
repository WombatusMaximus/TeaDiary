$(document).ready(documentLoaded);

var displayer;

function documentLoaded() {
    displayer = new TeaListDisplayer({
        title: "#TeaListTitle",
        body: "#TeaList"
    });

    $("#SearchType")
        .append($("<option>")
            .val(SEARCT_TYPE.NAME)
            .html("By " + SEARCT_TYPE.NAME));
    $("#SearchType")
        .append($("<option>")
            .val(SEARCT_TYPE.TYPE)
            .html("By " + SEARCT_TYPE.TYPE));

    displayer.loadAndDisplay();
}

function onSearchClick() {
    if ($("#SearchRequest").val() === "") {
        displayer.loadAndDisplay();
    } else {
        var search = $("#SearchType").val() === SEARCT_TYPE.NAME ? apiQueries.searchByName : apiQueries.searchByType;

        search(
            $("#SearchRequest").val(),
            $("#IsStrictSearch").prop("checked"),
            (teaList) => displayer.display(teaList)
        );
    }
}