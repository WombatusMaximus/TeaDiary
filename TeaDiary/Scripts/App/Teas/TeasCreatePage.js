function onCreateClick() {
    tea = {
        Type: $('#Type').val(),
        Name: $('#Name').val(),
        AdditionalName: $('#AdditionalName').val(),
        Notes: $('#Notes').val()
    }
    if (isTeaValid(tea)) {
        ApiCommands.addTea(tea,
            (id) => {
                redirectToTeaDetailsPage(id);
            });
    }
}

function redirectToTeaDetailsPage(id) {
    $(location).attr('href', TeaDetailsPageLink + id);
}