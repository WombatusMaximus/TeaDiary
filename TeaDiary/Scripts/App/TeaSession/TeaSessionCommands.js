function TeaSessionCommands() {
    var self = this;
    var confirmation = new PopupConfirmation();
    self.delete = (id, successCallback, errorCallback) => {
        confirmation.show(
            {
                body: "Are you sure you want to delete this tea session? You cannot undo this action"
            },
            () => apiCommands.deleteTeaSession(id, successCallback, errorCallback)
        );
    }
}