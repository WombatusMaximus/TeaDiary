$(document).ready(() => {
    var displayer = new TeaDisplayer({
        Name: '#Name',
        SecondName: '#AdditionalName',
        Type: '#Type',
        Notes: '#Notes'
    });

    displayer.getTeaById(currentId,
        (success) => {
            if (!success) {
                $(location).attr('href', TeasPageLink);
            }
        });
});

function showSuccessMessage() {
    var successText = "Success";
    $("#SuccessfulAlarmbox").hide();
    $("#SuccessfulAlarmbox").removeClass("btn-danger");
    $("#SuccessfulAlarmbox").addClass("btn-default");
    $("#SuccessfulAlarmbox").text(successText);
    $("#SuccessfulAlarmbox").show();
}

function showFailureMessage() {
    var failureText = "Fail";    
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
    updateTea(tea,
        (success) => {
            if (success) {
                showSuccessMessage();
            } else {
                
            }
        });
}

function onDeleteClick() {
    deleteTea(currentId,
        (callback) => {
            if (callback == true) {
                $(location).attr('href', '/Teas');
            } else {
                $("#SuccessfulAlarmbox").removeClass("btn-default");
                $("#SuccessfulAlarmbox").addClass("btn-danger");
                $("#SuccessfulAlarmbox").text(failureText);
                $("#SuccessfulAlarmbox").fadeIn("fast");
            }
        });
}