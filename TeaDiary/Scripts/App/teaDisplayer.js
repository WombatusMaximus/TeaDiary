function teaDisplayer(teaEditingFields) {
    var self = this;
    self.editingFields = teaEditingFields;
    var nameEditor = $(self.editingFields.Name);
    var secondNameEditor = $(self.editingFields.SecondName);
    var typeEditor = $(self.editingFields.Type);
    var notesEditor = $(self.editingFields.Notes);

    self.display = (tea) => {
        clearContainers();
        nameEditor.val(tea.Name);
        secondNameEditor.val(tea.AdditionalName);
        typeEditor.val(tea.Type);
        notesEditor.val(tea.Notes);
    }

    self.loadAndDisplay = (id, callback) => {
        apiQueries.getTea(id,
            (tea) => {
                if (isTeaValid(tea)) {
                    self.display(tea);
                }
                callback(isTeaValid(tea));
            });
    }

    self.clearContainers = () => {
        nameEditor.val('');
        secondNameEditor.val('');
        typeEditor.val('');
        notesEditor.val('');
    }
}