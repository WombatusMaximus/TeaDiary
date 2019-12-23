$(document).ready(() => {
    
});

function AddClick() {
    tea = {
        Type: $('#Type').val(),
        Name: $('#Name').val(),
        AdditionalName: $('#AdditionalName').val(),
        Notes: $('#Notes').val()
    }
    if (tea.Type != null && tea.Name != null) {
        addTea(tea,
            (callback) => {
                $(location).attr('href', '/Tea/' + callback);
                //$(location).attr('href', TeaByIdPageLink+callback);
            });
    }
}