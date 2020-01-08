function PopupConfirmation() {
    var self = this;
    this.show = (content, confirmCallback, rejectCallback) => {
        var config = setDefaults(content);
        if (confirm(config.body)) {
            confirmCallback();
        } else {
            rejectCallback();
        }
    }

    function setDefaults(content) {
        var defaults = {
            header: "Confirmation required",
            body: "Are you that sure of your action?",
            confirm: "Confirm",
            cancel: "Cancel"
        }
        return Object.assign({},defaults,content);
    }
}

