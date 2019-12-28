function onSearchClick() {
    var search = $("#SearchType").val() === "Name" ? searchByName : searchByType;

    search($("#SearchRequest").val(),
        $("#IsStrictSearch").prop("checked"),
        (teaList) => {
            var displayer = new TeaListDisplayer("#SearchResults");
            displayer.displayTeas(teaList);
        });
}