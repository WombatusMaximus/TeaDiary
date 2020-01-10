function TeaListDisplayer(container) {
    var self = this;
    self.container = $(container);
    var teaListTable = $("<table>");
    var teaListTableHead = $("<thead>");
    var teaListTableBody = $("<tbody>");
    var teaListTitle = $("<h1>");
    var teaNumber = 1;
    
    self.display = (teas) => {
        self.resetContainer();
        setContainerLoading(true);

        teaListTitle.html(buildTitle(teas));

        teas.forEach((tea) => {
            displayTea(tea);
        });

        if (isEmpty(teas)) {
            teaListTable.hide();
        } else {
            teaListTable.show();
        }

        setContainerLoading(false);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeas((teas) => self.display(teas));
    }

    self.resetContainer = () => {
        self.container.html("");
        teaListTable.html("");
        teaListTableHead.html(buildTeaTableHeader());
        teaListTableBody.html("");

        teaNumber = 1;

        teaListTable.removeClass();
        teaListTable.addClass("table table-hover");
        teaListTable.append(teaListTableHead);
        teaListTable.append(teaListTableBody);

        self.container.append(teaListTitle);
        self.container.append(teaListTable);
    }

    function setContainerLoading(isLoading) {
        if (isLoading) {
            self.container.hide();
        } else {
            self.container.show();
        }
    }

    function buildTitle(teas) {
        if (!isEmpty(teas)) {
            return TEA_LIST_TITLE;
        } else {
            return NO_TEAS_TITLE;
        }
    }

    function buildElement(tea, number) {
        var teaElement = $('<tr>')
            .attr("id", TEA_ELEMENT.PREFIX + TEA_ELEMENT.ID + tea.Id);
        var teaNumber = $("<td>")
            .text(number);
        var teaName = $("<td>")
            .text(tea.Name);
        var teaType = $("<td>")
            .text(tea.Type);
        var teaLink = $("<td>")
            .addClass("link text-info")
            .attr("id", TEA_ELEMENT.PREFIX + TEA_ELEMENT.LINK + tea.Id)
            .attr('href', TEA_DETAILS_PAGE_LINK + tea.Id)
            .text(MOAR);

        teaElement.append(teaNumber);
        teaElement.append(teaName);
        teaElement.append(teaType);
        teaElement.append(teaLink);
        return teaElement;
    }

    function displayTea(tea) {
        var teaLine = buildElement(tea, teaNumber);
        teaNumber++;
        teaListTableBody.append(teaLine);
    }

    function buildTeaTableHeader(teas) {
        var tableHeader = $("<tr>");

        tableHeader.append(
            $("<th>").text(NUMBER)
        );
        tableHeader.append(
            $("<th>").text(NAME)
        );
        tableHeader.append(
            $("<th>").text(TYPE)
        );
        tableHeader.append(
            $("<th>").text(LINK)
        );

        return tableHeader;
    }

    function isEmpty(teas) {
        return (teas == null || teas.length === 0);
    }
}