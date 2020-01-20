function TeaSessionListDisplayer(container) {
    var self = this;
    var displayer = new TableDisplayer(container,
        {
            numbered: false,
            name: "TeaSessionList",
            columns: getHeader(),
            actions: [
                {
                    text: "More...",
                    action: (element) => redirectToTeaSession(element)
                },
                {
                    icon: "glyphicon-remove",
                    hint: "Delete",
                    action: (element) => deleteElement(element)
                }
            ]
        });
    var commands = new TeaSessionCommands();
    
    self.display = (teaSessions) => {
        var teaSessionsSorted = teaSessions.sort((first, second) => first.Date > second.Date ? -1 : 1);

        teaSessionsSorted.forEach(displayTeaSession);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeaSessions((teaSessions) => self.display(teaSessions));
    }

    function getHeader() {
        var tableHeader = [
            {
                header: TEA_SESSION_TABLE_HEAD.DATE,
                key: "date"
            },
            {
                header: TEA_SESSION_TABLE_HEAD.TEXT,
                key: "description"
            }
        ];

        return tableHeader;
    }

    function displayTeaSession(teaSession) {
        displayer.addRow(buildElement(teaSession));
    }

    function buildElement(teaSession) {
        var teaSessionElement = {
            id: teaSession.Id,
            date: buildDate(teaSession.Date),
            description: teaSession.Notes.length < 50
                ? teaSession.Notes
                : (teaSession.Notes.slice(0, 47) + "...")
        };

        return teaSessionElement;
    }

    function buildDate(date) {
        var dateConverted = new Date(date);

        var dateFormat = { year: "numeric", month: "2-digit", day: "2-digit" };

        var dateStringRepresentation = dateConverted.toLocaleDateString(undefined, dateFormat);

        return dateStringRepresentation;
    }

    function deleteElement(element) {
        commands.delete(
            element.id,
            () => displayer.deleteRow(element.rowId));
    }

    function redirectToTeaSession(element) {
        $(location).attr('href', TEA_SESSION_DETAILS_PAGE_LINK + element.id);
    }
}