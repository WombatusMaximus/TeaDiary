$(document).ready(() => {
    displayTeaById(currentId, "#Name", "#AdditionalName", "#Type", "#Notes", (success) => {
        if (!success || $("#Name").val()==null) {
            $(location).attr('href', '/Teas');
        }
    });
});

function UpdateClick() {
    tea = {
        Id: currentId,
        Type: $('#Type').val(),
        Name: $('#Name').val(),
        AdditionalName: $('#AdditionalName').val(),
        Notes: $('#Notes').val()
    }
    updateTea(tea,
        (feedback) => {
            if (feedback) {
                $("#SuccessfulAlarmbox").removeClass("btn-danger");
                $("#SuccessfulAlarmbox").addClass("btn-default");
                $("#SuccessfulAlarmbox").text("Success");
                $("#SuccessfulAlarmbox").fadeIn("fast");
                $("#SuccessfulAlarmbox").fadeOut(3000);
            } else {
                $("#SuccessfulAlarmbox").removeClass("btn-default");
                $("#SuccessfulAlarmbox").addClass("btn-danger");
                $("#SuccessfulAlarmbox").text("Fail");
                $("#SuccessfulAlarmbox").fadeIn("fast");
                $("#SuccessfulAlarmbox").fadeOut(3000);
            }
        });
}

function DeleteClick() {
    deleteTea(currentId,
        (callback) => {
            if (callback == true) {
                $(location).attr('href', '/Teas');
            } else {
                $("#SuccessfulAlarmbox").removeClass("btn-default");
                $("#SuccessfulAlarmbox").addClass("btn-danger");
                $("#SuccessfulAlarmbox").text("Fail");
                $("#SuccessfulAlarmbox").fadeIn("fast");
                $("#SuccessfulAlarmbox").fadeOut(3000);
            }
        });
}