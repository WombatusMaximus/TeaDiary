function ApiCommands() {
    var self = this;

    self.addTea = (tea, successCallback, errorCallback) => {
        $.ajax("/api/tea/",
            {
                method: 'POST',
                data: tea,
                error: errorCallback,
                success: (response) => successCallback(response)
            }
        );
    }

    self.updateTea = (tea, successCallback, errorCallback) => {
        $.ajax("/api/tea/",
            {
                method: 'PUT',
                data: tea,
                error: errorCallback,
                success: (succeeded) => {
                    if (succeeded) {
                        successCallback();
                    } else {
                        errorCallback();
                    }
                }
            });
    }

    self.deleteTea = (id, successCallback, errorCallback) => {
        $.ajax("/api/tea/" + id,
            {
                method: 'DELETE',
                error: errorCallback,
                success: (succeeded) => {
                    if (succeeded) {
                        successCallback();
                    } else {
                        errorCallback();
                    }
                }
            }
        );
    }

    self.addTeaSession = (teaSession, successCallback, errorCallback) => {
        $.ajax("/api/teaSession",
            {
                method: "POST",
                data: teaSession,
                error: errorCallback,
                success: (response) => successCallback(response)
            }
        );
    }

    self.updateTeaSession = (teaSession, successCallback, errorCallback) => {
        $.ajax("/api/teaSession",
            {
                method: "PUT",
                data: teaSession,
                error: errorCallback,
                success: (succeeded) => {
                    if (succeeded) {
                        successCallback();
                    } else {
                        errorCallback();
                    }
                }
            }
        );
    }

    self.deleteTeaSession = (id, successCallback, errorCallback) => {
        $.ajax("/api/teaSession/"+id,
            {
                method: "DELETE",
                error: errorCallback,
                success: (succeeded) => {
                    if (succeeded) {
                        successCallback();
                    } else {
                        errorCallback();
                    }
                }
            }
        );
    }
}