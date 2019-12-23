function displayTeas(teas, targetElement) {
    $(targetElement).hide();
    if (teas.length > 0) {
        $(targetElement).html('<h2>Your tea list:</h2>');
    } else {
        $(targetElement).html('<h2>No money - no <s>honey</s> tea</h2>');
    }
    for (var i = 0; i < teas.length; i++) {
        $(targetElement).append($('<a>').attr('href', '/tea/' + teas[i].Id).attr('class', '').text(teas[i].Name + ' (' + teas[i].Type + ')'));
        $(targetElement).append($('<p>'));
    }
    $(targetElement).fadeIn();
    if (teas.length == 0) {
        $(targetElement).fadeOut(3000);
    }
}

function displayAllTeas(targetElement) {
    getTeas((teas) => {
        displayTeas(teas, targetElement);
    });
} 

function displayTeaById(id, targetName, targetSecondName, targetType, targetNotes, callback) {
    $(targetName).html('');
    $(targetSecondName).html('');
    $(targetType).html('');
    $(targetNotes).html('');
    getTea(id, (tea) => {
        if (tea == null) {
            callback(false);
        } else {
            $(targetName).val(tea.Name);
            $(targetSecondName).val(tea.AdditionalName);
            $(targetType).val(tea.Type);
            $(targetNotes).val(tea.Notes);
            callback(true);
        }
    });
} 


