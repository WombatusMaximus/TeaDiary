$(document).ready(documentLoaded());

function documentLoaded() {
    $("#SearchType").append($("<option>").val(SEARCT_TYPE.NAME).html("By " + SEARCT_TYPE.NAME));
    $("#SearchType").append($("<option>").val(SEARCT_TYPE.TYPE).html("By " + SEARCT_TYPE.TYPE));
}

function onSearchClick() {
    var search = $("#SearchType").val() === SEARCT_TYPE.NAME ? apiQueries.searchByName : apiQueries.searchByType;

    search($("#SearchRequest").val(),
        $("#IsStrictSearch").prop("checked"),
        (teaList) => {
            var displayer = new teaListDisplayer("#SearchResults");
            displayer.display(teaList);
        });
}