$(document).ready(documentLoaded());

var displayer;

function documentLoaded() {
    displayer = new teaDisplayer({
        Name: '#Name',
        SecondName: '#AdditionalName',
        Type: '#Type',
        Notes: '#Notes'
    });
    if (isCreatePage) {
        createPageLoaded();
    } else {
        detailsPageLoaded();
    }
}

function detailsPageLoaded() {
    $("#Create").hide();
    
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

    displayer.clearContainers();
}

function showSuccessMessage() {
    $("#Alarmbox").hide();
    $("#Alarmbox").removeClass("alert-danger");
    $("#Alarmbox").addClass("alert-success");
    $("#Alarmbox").html(SUCCESS_TEXT);
    $("#Alarmbox").show();
}

function showFailureMessage() {
    $("#Alarmbox").hide();
    $("#Alarmbox").removeClass("alert-success");
    $("#Alarmbox").addClass("alert-danger");
    $("#Alarmbox").html(FAILURE_TEXT);
    $("#Alarmbox").show();
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
        (success) => showSuccessMessage(),
        (failure) => showFailureMessage()
    );
}

function onDeleteClick() {
    apiCommands.deleteTea(currentId,
        (success) => redirectToTeaList(),
        (failure) => showFailureMessage()
    );
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
            (id) => redirectToTeaDetailsPage(id)
        );
    } else {
        showFailureMessage();
    }
}

function redirectToTeaDetailsPage(id) {
    $(location).attr('href', TeaDetailsPageLink + id);
}

function onResetClick() {
    documentLoaded();
}