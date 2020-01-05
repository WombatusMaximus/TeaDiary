function ApiCommands() {
    var self = this;

    self.addTea = (tea, successCallback, errorCallback) => {
        $.ajax("/api/tea/",
            {
                method: 'POST',
                data: tea
            }
        ).done((response) => {
            successCallback(response);
        });
    }

    self.updateTea = (tea, successCallback, errorCallback) => {
        $.ajax("/api/tea/",
            {
                method: 'PUT',
                data: tea
            }
        ).done((response) => {
            if (response) {
                successCallback();
            } else {
                errorCallback();
            }
        });
    }

    self.deleteTea = (id, successCallback, errorCallback) => {
        $.ajax("/api/tea/" + id,
            {
                method: 'DELETE'
            }
        ).done((response) => {
            if (response) {
                successCallback();
            } else {
                errorCallback();
            }
        });
    }
}