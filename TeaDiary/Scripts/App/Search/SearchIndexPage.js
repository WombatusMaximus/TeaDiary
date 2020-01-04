function onSearchClick() {
    var search = $("#SearchType").val() === "Name" ? ApiQueries.searchByName : ApiQueries.searchByType;

    search($("#SearchRequest").val(),
        $("#IsStrictSearch").prop("checked"),
        (teaList) => {
            var displayer = new TeaListDisplayer("#SearchResults");
            displayer.display(teaList);
        });
}