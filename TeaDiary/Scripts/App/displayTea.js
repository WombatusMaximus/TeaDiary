﻿function TeaDisplayer(containers) {
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
    
    self.display = (tea) => {
        clearContainers();
        name.val(tea.Name);
        secondName.val(tea.AdditionalName);
        type.val(tea.Type);
        notes.val(tea.Notes);
    }

    self.loadAndDisplay = (id, callback) => {
        ApiQueries.getTea(id,
            (tea) => {
                if (isTeaValid(tea)) {
                    self.display(tea);
                }
                callback(isTeaValid(tea));
            });
    }
}