function TeaCommands() {
    var self = this;
    self.delete = (id, successCallback, errorCallback) => {
        popupConfirmation(
            {
                 body: "Are you sure you want to delete this tea? You cannot undo this action"
            },
            () => apiCommands.deleteTea(id, successCallback, errorCallback)
        );
    }

    function popupConfirmation(content, confirmCallback, rejectCallback) {
        content = popupConfirmationContentValidation(content);
        if (confirm(content.body)) {
            confirmCallback();
        } else {
            rejectCallback();
        }
    }

    function popupConfirmationContentValidation(content) {
        var validated = content;
        if (validated == null || typeof validated != "object") {
            validated = {
                header: "Confirmation required",
                body: "Are you that sure of your action?",
                confirm: "Confirm",
                cancel: "Cancel"
            }
        } else {
            if (validated.header == null) {
                validated.header = "Confirmation required";
            }
            if (validated.body == null) {
                validated.body = "Are you that sure of your action?";
            }
            if (validated.confirm == null) {
                validated.confirm = "Confirm";
            }
            if (validated.cancel == null) {
                validated.cancel = "Cancel";
            }
        }
        return validated;
    }
}