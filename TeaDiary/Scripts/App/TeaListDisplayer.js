function TeaListDisplayer(containters) {
    var self = this;
    var teaListContainer = $(containters.body);
    var teaListTitle = $(containters.title);
    var teaListTable = $("<table>");
    var teaListTableHead = $("<thead>");
    var teaListTableBody = $("<tbody>");
    
    self.display = (teas) => {
        setContainerLoading(true);

        self.setupContainer();
        
        displayTitle(teas);

        displayTable(teas);

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

    function displayTable(teas) {
        teas.forEach(displayTea);

        renumberTeas();

        if (isEmpty(teas)) {
            teaListTable.hide();
        } else {
            teaListTable.show();
        }
    }

    function renumberTeas() {
        var nextTeaNumber = 1;
        var teaNumberElements = teaListTable.find("."+TEA_NUMBER);
        $(teaNumberElements).each((index, element) => $(element).text(nextTeaNumber++));
    }

    function displayTea(tea) {
        var teaLine = buildElement(tea);
        teaListTableBody.append(teaLine);
    }

    function buildElement(tea) {
        var teaElement = $('<tr>')
            .attr("id", buildId(tea.Id));
        var teaNumber = $("<td>")
            .addClass(TEA_NUMBER);
        var teaName = $("<td>")
            .text(tea.Name);
        var teaType = $("<td>")
            .text(tea.Type);
        var teaLink = $("<td>")
            .addClass("text-info")
            .attr("id", buildId(tea.Id,"link"))
            .attr('link', TEA_DETAILS_PAGE_LINK + tea.Id)
            .text(MOAR);

        var teaManage = $("<td>")
            .html("");
        teaManage.append(
            $("<span>")
            .addClass("glyphicon glyphicon-remove")
            .click(() => { deleteElement(tea.Id) })
            .css("cursor", "pointer")
        );

        teaElement.append(teaNumber);
        teaElement.append(teaName);
        teaElement.append(teaType);
        teaElement.append(teaLink);
        teaElement.append(teaManage);
        return teaElement;
    }

    function deleteElement(teaId) {
        teaCommands.delete(
            teaId,
            () => {
                $('#' + buildId(teaId)).remove();
                renumberTeas();
            });
    }

    function buildId(teaId, type) {
        var id = TEA_ELEMENT.PREFIX;
        switch (type) {
            case "link":
                return id + TEA_ELEMENT.LINK + teaId;
            default:
                return id + TEA_ELEMENT.ID + teaId;
        }
    }
}