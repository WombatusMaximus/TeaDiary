function TeaListDisplayer(container) {
    var self = this;
    self.container = $(container);
    var teaElementId = "displayedTeaElementNumber";
    self.display = (teas) => {
        self.clearContainer();
        setContainerLoading(true);

        var header = buildHeader(teas);
        appendElement(header);
        teas.forEach((tea) => {
            displayTea(tea);
        });

        setContainerLoading(false);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeas((teas) => self.display(teas));
    }

    self.clearContainer = () => {
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
            return $("<h1>").html(TEA_LIST_TITLE);
        } else {
            return $("<h1>").html(NO_TEAS_TITLE);
        }
    }

    function buildElement(tea) {
        var teaString = $('<div>')
            .html($("<a>")
                .attr('href', TeaDetailsPageLink + tea.Id)
                .attr("id", teaElementId+tea.Id)
                .text(tea.Name + ' (' + tea.Type + ')')
            );
        return teaString;
    }

    function appendElement(text) {
        self.container.append(text);
        
    }

    function displayTea(tea) {
        var teaLine = buildElement(tea);
        appendElement(teaLine);
    }

}