function TeaListDisplayer(container) {
    var self = this;
    self.container = $(container);
    var teaListTable = $("<table>");
    var teaListContainer = $("<tbody>");
    var entityCounter = 1;
    
    self.display = (teas) => {
        self.clearContainer();
        setContainerLoading(true);
        
        displayHeader(teas);
        teas.forEach((tea) => {
            displayTea(tea);
        });

        appendElement(teaListContainer, teaListTable);
        if (!isEmpty(teas)) {
            appendElement(teaListTable, self.container);
        }

        setContainerLoading(false);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeas((teas) => self.display(teas));
    }

    self.clearContainer = () => {
        self.container.html("");
        teaListTable.html("");
        teaListContainer.html("");
        entityCounter = 1;
        
        teaListTable.addClass("table table-hover");
    }

    function setContainerLoading(isLoading) {
        if (isLoading) {
            self.container.hide();
        } else {
            self.container.show();
        }
    }

    function buildHeader(teas) {
        if (!isEmpty(teas)) {
            return $("<h1>").html(TEA_LIST_TITLE);
        } else {
            return $("<h1>").html(NO_TEAS_TITLE);
        }
    }

    function buildElement(tea, counter) {
        var teaElement = $('<tr>')
            .attr("id", TEA_ELEMENT.PREFIX + TEA_ELEMENT.ID + tea.Id);
        var teaNumber = $("<td>")
            .text(counter);
        var teaName = $("<td>")
            .text(tea.Name);
        var teaType = $("<td>")
            .text(tea.Type);
        var teaLink = $("<td>")
            .addClass("link text-info")
            .attr("id", TEA_ELEMENT.PREFIX + TEA_ELEMENT.LINK + tea.Id)
            .attr('href', TEA_DETAILS_PAGE_LINK + tea.Id)
            .text(MOAR);

        appendElement(teaNumber, teaElement);
        appendElement(teaName, teaElement);
        appendElement(teaType, teaElement);
        appendElement(teaLink, teaElement);
        return teaElement;
    }

    function appendElement(text, container) {
        var config = (container == null) ? teaListContainer : container;
        $(config).append(text);
    }

    function displayTea(tea) {
        var teaLine = buildElement(tea, entityCounter);
        entityCounter++;
        appendElement(teaLine);
    }

    function displayHeader(teas) {
        var header = buildHeader(teas);
        appendElement(header, container);

        var tableHeader = $("<thead>");
        var tableHeaderList = $("<tr>");
        
        tableHeaderList.append(
            $("<th>").text(NUMBER)
        );
        tableHeaderList.append(
            $("<th>").text(NAME)
        );
        tableHeaderList.append(
            $("<th>").text(TYPE)
        );
        tableHeaderList.append(
            $("<th>").text(LINK)
        );

        appendElement(tableHeaderList, tableHeader);
        appendElement(tableHeader, teaListTable);
    }

    function isEmpty(teas) {
        return (teas == null || teas.length === 0);
    }
}