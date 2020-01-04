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
            return teaListTitle;
        } else {
            return noTeasTitle;
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

    self.display = (teas) => {
        clearContainer();
        setContainerLoading(true);

        var header = buildTeaListHeader(teas);
        add(header);
        teas.forEach((tea) => {
            displayTea(tea);
        });

        setContainerLoading(false);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeas((teas) => {
            self.display(teas);
        });
    }
}