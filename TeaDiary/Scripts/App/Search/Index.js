$(document).ready(documentLoaded);

var displayer;

function documentLoaded() {
    displayer = new TeaListDisplayer({
            title: "#SearchResultsTitle", 
            body: "#SearchResults"
        });

    $("#SearchType")
        .append($("<option>")
            .val(SEARCH_TYPE.NAME)
            .html("By " + SEARCH_TYPE.NAME));
    $("#SearchType")
        .append($("<option>")
            .val(SEARCH_TYPE.TYPE)
            .html("By " + SEARCH_TYPE.TYPE));
}

function onSearchClick() {
    var search = $("#SearchType").val() === SEARCH_TYPE.NAME ? apiQueries.searchByName : apiQueries.searchByType;

    search(
        $("#SearchRequest").val(),
        $("#IsStrictSearch").prop("checked"),
        (teaList) => {
            displayer.display(teaList);
        });
}