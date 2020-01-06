function ApiCommands() {
    var self = this;

    self.addTea = (tea, successCallback, errorCallback) => {
        $.ajax("/api/tea/",
            {
                method: 'POST',
                data: tea,
                error: errorCallback
            }
        ).done((response) => {
            successCallback(response);
        });
    }

    self.updateTea = (tea, successCallback, errorCallback) => {
        $.ajax("/api/tea/",
            {
                method: 'PUT',
                data: tea,
                error: errorCallback
            })
            .done((succeeded) => {
                if (succeeded) {
                    successCallback();
                } else {
                    errorCallback();
                }
            });
    }

    self.deleteTea = (id, successCallback, errorCallback) => {
        $.ajax("/api/tea/" + id,
            {
                method: 'DELETE',
                error: errorCallback
            }
        ).done((succeeded) => {
            if (succeeded) {
                successCallback();
            } else {
                errorCallback();
            }
        });
    }
}