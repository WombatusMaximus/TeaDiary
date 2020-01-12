function TeaListDisplayer(containters) {
    var self = this;
    var teaListContainer = $(containters.body);
    var teaListTitle = $(containters.title);
    var teaListTable = $("<table>");
    var teaListTableHead = $("<thead>");
    var teaListTableBody = $("<tbody>");
    
    self.display = (teas) => {
        self.setupContainer();
        setContainerLoading(true);

        displayTitle(teas);

        teas.forEach(displayTea);

        if (isEmpty(teas)) {
            teaListTable.hide();
        } else {
            teaListTable.show();
        }
        
        renumberTeas();

        setContainerLoading(false);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeas((teas) => self.display(teas));
    }

    self.setupContainer = () => {
        teaListContainer.html("");
        teaListTable.html("");
        teaListTableHead.html(buildTeaTableHeader());
        teaListTableBody.html("");

        teaListTable.removeClass();
        teaListTable.addClass("table table-hover");
        teaListTable.append(teaListTableHead);
        teaListTable.append(teaListTableBody);

        teaListContainer.append(teaListTable);
    }

    function setContainerLoading(isLoading) {
        if (isLoading) {
            teaListContainer.hide();
        } else {
            teaListContainer.show();
        }
    }

    function buildTitle(teas) {
        return isEmpty(teas)
            ? $("<h1>").html(NO_TEAS_TITLE)
            : $("<h1>").html(TEA_LIST_TITLE);
    }

    function displayTitle(teas) {
        teaListTitle.html(buildTitle(teas));
    }

    function renumberTeas() {
        var nextTeaNumber = 1;
        var teaNumberElements = teaListTable.find("."+TEA_NUMBER);
        $(teaNumberElements).each((index, element) => $(element).text(nextTeaNumber++));
    }

    function buildElement(tea) {
        var teaElement = $('<tr>')
            .attr("id", TEA_ELEMENT.PREFIX + TEA_ELEMENT.ID + tea.Id);
        var teaNumber = $("<td>")
            .addClass(TEA_NUMBER);
        var teaName = $("<td>")
            .text(tea.Name);
        var teaType = $("<td>")
            .text(tea.Type);
        var teaLink = $("<td>")
            .addClass("text-info")
            .attr("id", TEA_ELEMENT.PREFIX + TEA_ELEMENT.LINK + tea.Id)
            .attr('link', TEA_DETAILS_PAGE_LINK + tea.Id)
            .text(MOAR);

        var teaManage = $("<td>")
            .html("");
        teaManage.append(
            $("<span>")
                .addClass("glyphicon glyphicon-remove")
                .click(()=>teaCommands.delete(
                    tea.Id,
                    () => {
                        $('#' + TEA_ELEMENT.PREFIX + TEA_ELEMENT.ID + tea.Id).remove();
                        renumberTeas();
                    })
                )
                .css("cursor", "pointer")
        );

        teaElement.append(teaNumber);
        teaElement.append(teaName);
        teaElement.append(teaType);
        teaElement.append(teaLink);
        teaElement.append(teaManage);
        return teaElement;
    }

    function displayTea(tea) {
        var teaLine = buildElement(tea);
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
        tableHeader.append(
            $("<th>").text(MANAGE)
        );

        return tableHeader;
    }
}