function TeaDisplayer(containers) {
    var self = this;
    self.containers = containers;
    var name = $(self.containers.Name);
    var secondName = $(self.containers.SecondName);
    var type = $(self.containers.Type);
    var notes = $(self.containers.Notes);
    function clearContainers() {
        name.html('');
        secondName.html('');
        type.html('');
        notes.html('');
    }
    
    self.displayTea = (tea) => {
        clearContainers();
        name.val(tea.Name);
        secondName.val(tea.AdditionalName);
        type.val(tea.Type);
        notes.val(tea.Notes);
    }

    self.getTeaById = (id, callback) => {
        getTea(id,
            (tea) => {
                if (isTeaValid(tea)) {
                    self.displayTea(tea);
                }
                callback(isTeaValid(tea));
            });
    }
}