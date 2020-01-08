$(document).ready(resetForm);

var displayer;

function resetForm() {
    displayer = new TeaDisplayer({
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

    displayer.loadAndDisplay(
        currentId,
        (success) => {
            if (!success) {
                redirectToTeaList();
            }
        });
}

function createPageLoaded() {
    $("#Update").hide();
    $("#Delete").hide();

    displayer.clearEditingFields();
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
    var tea = displayer.buildTeaFromEditingFields(currentId);

    apiCommands.updateTea(
        tea,
        (success) => showSuccessMessage(),
        (failure) => showFailureMessage()
    );
}

function onDeleteClick() {
    var teaCommands = new TeaCommands();
    teaCommands.delete(currentId, redirectToTeaList, showFailureMessage);
}

function redirectToTeaList() {
    $(location).attr('href', TEAS_PAGE_LINK);
}

function onCreateClick() {
    var tea = displayer.buildTeaFromEditingFields(currentId);

    if (isTeaValid(tea)) {
        apiCommands.addTea(
            tea,
            (id) => redirectToTeaDetailsPage(id)
        );
    } else {
        showFailureMessage();
    }
}

function redirectToTeaDetailsPage(id) {
    $(location).attr('href', TEA_DETAILS_PAGE_LINK + id);
}

function onResetClick() {
    resetForm();
}