$(document).ready(() => {
    $("#SearchType").append($("<option>").val(searchType.Name).html("By " + searchType.Name));
    $("#SearchType").append($("<option>").val(searchType.Type).html("By " + searchType.Type));
});

function onSearchClick() {
    var search = $("#SearchType").val() === searchType.Name ? ApiQueries.searchByName : ApiQueries.searchByType;

    search($("#SearchRequest").val(),
        $("#IsStrictSearch").prop("checked"),
        (teaList) => {
            var displayer = new TeaListDisplayer("#SearchResults");
            displayer.display(teaList);
        });
}