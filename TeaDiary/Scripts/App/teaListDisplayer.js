function teaListDisplayer(container) {
    var self = this;
    self.container = $(container);
    function clearContainer() {
        self.container.html("");
    }
    function setContainerLoading(isLoading) {
        if (isLoading) {
            self.container.hide();
        } else {
            self.container.show();
        }
    }
    function buildHeader(teas) {
        if (teas != null && teas.length > 0) {
            return $("<h2>").html(TEA_LIST_TITLE);
        } else {
            return $("<h2>").html(NO_TEAS_TITLE);
        }
    }
    function buildElement(tea) {
        var teaString = $('<a>')
            .attr('href', TeaDetailsPageLink + tea.Id)
            .text(tea.Name + ' (' + tea.Type + ')');
        return teaString;
    }
    function appendElement(text) {
        self.container.append(text);
        self.container.append($('</br>'));
    }
    function displayTea(tea) {
        var teaLine = buildElement(tea);
        appendElement(teaLine);
    }

    self.display = (teas) => {
        clearContainer();
        setContainerLoading(true);

        var header = buildHeader(teas);
        appendElement(header);
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