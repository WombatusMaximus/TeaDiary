function TeaSessionListDisplayer(container) {
    var self = this;
    var teaSessionsList = $(container);
    var table = $("<table>");
    var tableHead = $("<thead>");
    var tableBody = $("<tbody>");

    self.display = (teaSessions) => {
        setContainerLoading(true);

        self.setupContainer();

        var teaSessionsSorted = teaSessions.sort((first, second) => first.Date > second.Date ? -1 : 1);

        teaSessionsSorted.forEach(displayTeaSession);

        renumberTeaSessions();

        if (isEmpty(teaSessionsSorted)) {
            table.hide();
        } else {
            table.show();
        }

        setContainerLoading(false);
    }

    self.loadAndDisplay = () => {
        apiQueries.getTeaSessions((teaSessions) => self.display(teaSessions));
    }

    self.setupContainer = () => {
        teaSessionsList.html("");
        table.html("");
        tableHead.html(buildHeader());
        tableBody.html("");

        table.removeClass();
        table.addClass("table table-hover");
        table.append(tableHead);
        table.append(tableBody);

        teaSessionsList.append(table);
    }

    function setContainerLoading(isLoading) {
        if (isLoading) {
            teaSessionsList.hide();
        } else {
            teaSessionsList.show();
        }
    }

    function buildHeader() {
        var tableHeader = $("<tr>");

        tableHeader.append(
            $("<th>").text(TEA_SESSION_TABLE_HEAD.NUMBER)
        );
        tableHeader.append(
            $("<th>").text(TEA_SESSION_TABLE_HEAD.DATE)
        );
        tableHeader.append(
            $("<th>").text(TEA_SESSION_TABLE_HEAD.DETAILS)
        );
        tableHeader.append(
            $("<th>").text(TEA_SESSION_TABLE_HEAD.MANAGE)
        );

        return tableHeader;
    }

    function renumberTeaSessions() {
        var nextTeaSessionNumber = 1;
        var teaSessionNumberElements = table.find("." + TEA_SESSION_NUMBER);
        $(teaSessionNumberElements).each((index, element) => $(element).text(nextTeaSessionNumber++));
    }

    function displayTeaSession(teaSession) {
        var teaSessionLine = buildElement(teaSession);
        tableBody.append(teaSessionLine);
    }

    function buildElement(teaSession) {
        var teaSessionElement = $('<tr>')
            .attr("id", buildId(teaSession.Id));
        var teaSessionNumber = $("<td>")
            .addClass(TEA_SESSION_NUMBER);
        var teaSessionDate = $("<td>")
            .text(buildDate(teaSession.Date));
        var teaSessionLink = $("<td>")
            .addClass("text-info")
            .attr("id", buildId(teaSession.Id, "link"))
            .attr('link', TEA_SESSION_DETAILS_PAGE_LINK + teaSession.Id)
            .text(MOAR);

        var teaSessionManage = $("<td>")
            .html("");
        teaSessionManage.append(
            $("<span>")
                .addClass("glyphicon glyphicon-remove")
                .click(() => deleteElement(teaSession.Id))
                .css("cursor", "pointer")
        );

        teaSessionElement.append(teaSessionNumber);
        teaSessionElement.append(teaSessionDate);
        teaSessionElement.append(teaSessionLink);
        teaSessionElement.append(teaSessionManage);
        return teaSessionElement;
    }

    function buildDate(date) {
        var dateConverted = new Date(date);
        var dateStringRepresentation =
            dateConverted.getDate() + "." + (dateConverted.getMonth() + 1) + "." + dateConverted.getFullYear();
        
        return dateStringRepresentation;
    }

    function deleteElement(teaSessionId) {
        
    }

    function buildId(teaSessionId, type) {
        var id = TEA_SESSION_ELEMENT.PREFIX;
        switch (type) {
            case "link":
                return id + TEA_SESSION_ELEMENT.LINK + teaSessionId;
            default:
                return id + TEA_SESSION_ELEMENT.ID + teaSessionId;
        }
    }
}