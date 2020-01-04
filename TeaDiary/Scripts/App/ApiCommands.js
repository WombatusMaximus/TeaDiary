function apiCommands() {
    var self = this;

    self.addTea = (tea, callback) => {
        $.ajax("/api/tea/",
            {
                method: 'POST',
                data: tea
            }
        ).done((response) => { callback(response) });
    }

    self.updateTea = (tea, callback) => {
        $.ajax("/api/tea/",
            {
                method: 'PUT',
                data: tea
            }
        ).done((response) => { callback(response) });
    }

    self.deleteTea = (id, callback) => {
        $.ajax("/api/tea/" + id,
            {
                method: 'DELETE'
            }
        ).done((response) => { callback(response) });
    }
}