function TeaListDisplayer(container) {
    var self = this;
    self.container = $(container);
    function clearContainer() {
        self.container.html("");
    }
    function setContainerLoading(loading) {
        if (loading) {
            self.container.hide();
        } else {
            self.container.show();
        }
    }
    function buildTeaListHeader(tea) {
        if (tea != null && tea.length > 0) {
            return "<h2>Your tea list:</h2>";
        } else {
            return "<h2>No teas were found :(</h2>";
        }
    }
    function getTeaSerialized(tea) {
        var teaString = $('<a>')
            .attr('href', TeaDetailsPageLink + tea.Id)
            .text(tea.Name + ' (' + tea.Type + ')');
        return teaString;
    }
    function add(text) {
        self.container.append(text);
        self.container.append($('</br>'));
    }
    function displayTea(tea) {
        var teaLine = getTeaSerialized(tea);
        add(teaLine);
    }

    self.displayTeas = (teas) => {
        clearContainer();
        setContainerLoading(true);

        var header = buildTeaListHeader(teas);
        add(header);
        teas.forEach((tea) => {
            displayTea(tea);
        });

        setContainerLoading(false);
    }

    self.getTeas = () => {
        getTeas((teas) => {
            self.displayTeas(teas);
        });
    }
}