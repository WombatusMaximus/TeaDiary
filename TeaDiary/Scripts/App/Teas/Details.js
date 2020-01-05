$(document).ready(() => {
    documentLoaded();
});

function documentLoaded() {
    if (isCreatePage) {
        createPageLoaded();
    } else {
        detailsPageLoaded();
    }
}

function detailsPageLoaded() {
    $("#Create").hide();

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
}

function createPageLoaded() {
    $("#Update").hide();
    $("#Delete").hide();

    $("#Name").val("");
    $("#AdditionalName").val("");
    $("#Type").val("");
    $("#Notes").val("");
}

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

function onCreateClick() {
    tea = {
        Type: $('#Type').val(),
        Name: $('#Name').val(),
        AdditionalName: $('#AdditionalName').val(),
        Notes: $('#Notes').val()
    }
    if (isTeaValid(tea)) {
        apiCommands.addTea(tea,
            (id) => {
                redirectToTeaDetailsPage(id);
            });
    }
}

function redirectToTeaDetailsPage(id) {
    $(location).attr('href', TeaDetailsPageLink + id);
}

function onResetClick() {
    documentLoaded();
}