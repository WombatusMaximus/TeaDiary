function onCreateClick() {
    tea = {
        Type: $('#Type').val(),
        Name: $('#Name').val(),
        AdditionalName: $('#AdditionalName').val(),
        Notes: $('#Notes').val()
    }
    if (isTeaValid(tea)) {
        ApiCommands.addTea(tea,
            (callback) => {
                $(location).attr('href', TeaDetailsPageLink+callback);
            });
    }
}