function TeaDisplayer(teaEditingFields) {
    var self = this;
    self.editingFields = teaEditingFields;
    var nameEditor = $(self.editingFields.Name);
    var secondNameEditor = $(self.editingFields.SecondName);
    var typeEditor = $(self.editingFields.Type);
    var notesEditor = $(self.editingFields.Notes);

    self.display = (tea) => {
        self.clearEditingFields();
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

    self.clearEditingFields = () => {
        nameEditor.val('');
        secondNameEditor.val('');
        typeEditor.val('');
        notesEditor.val('');
    }

    self.buildTeaFromEditingFields = (id) => {
        var tea = {
            Id: id,
            Type: typeEditor.val(),
            Name: nameEditor.val(),
            AdditionalName: secondNameEditor.val(),
            Notes: notesEditor.val()
        }
        return tea;
    }
}