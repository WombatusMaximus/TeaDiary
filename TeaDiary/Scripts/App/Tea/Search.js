$(document).ready(() => {
    
});

function SearchClick() {
    if ($("#SearchType").val() == "Name") {
        searchByName($("#SearchRequest").val(),
            $("#IsStrictSearch").prop("checked"),
            (teaList) => {
                displayTeas(teaList, "#SearchResults");
            });
    } else {
        searchByType($("#SearchRequest").val(),
            $("#IsStrictSearch").prop("checked"),
            (teaList) => {
                displayTeas(teaList, "#SearchResults");
            });
    }
}