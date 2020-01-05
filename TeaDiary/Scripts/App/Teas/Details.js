$(document).ready(() => {
    var displayer = new TeaDisplayer({
        Name: '#Name',
        SecondName: '#AdditionalName',
        Type: '#Type',
        Notes: '#Notes'
    });

    displayer.loadAndDisplay(currentId,
        (success) => {
            if (!success) {
                redirectToTeaList();
            }
        });
});

function showSuccessMessage() {
    $("#SuccessfulAlarmbox").hide();
    $("#SuccessfulAlarmbox").removeClass("btn-danger");
    $("#SuccessfulAlarmbox").addClass("btn-default");
    $("#SuccessfulAlarmbox").text(successText);
    $("#SuccessfulAlarmbox").show();
}

function showFailureMessage() {
    $("#SuccessfulAlarmbox").hide();
    $("#SuccessfulAlarmbox").removeClass("btn-default");
    $("#SuccessfulAlarmbox").addClass("btn-danger");
    $("#SuccessfulAlarmbox").text(failureText);
    $("#SuccessfulAlarmbox").show();
}

function onUpdateClick() {
    tea = {
        Id: currentId,
        Type: $('#Type').val(),
        Name: $('#Name').val(),
        AdditionalName: $('#AdditionalName').val(),
        Notes: $('#Notes').val()
    }

    apiCommands.updateTea(tea,
        (success) => {
            if (success) {
                showSuccessMessage();
            } else {
                showFailureMessage();
            }
        });
}

function onDeleteClick() {
    apiCommands.deleteTea(currentId,
        (success) => {
            if (success) {
                redirectToTeaList();
            } else {
                showFailureMessage();
            }
        });
}

function redirectToTeaList() {
    $(location).attr('href', TeasPageLink);
}