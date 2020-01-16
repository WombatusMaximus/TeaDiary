function TableDisplayer(tableContainer, parameters) {
    var self = this;
    var container = $(tableContainer);
    var table = $("<table>");
    var header = $("<thead>");
    var body = $("<tbody>");
    var noItemsMessage = $("<div>");
    var params = Object.assign({}, getDefaults(), parameters);
    var display = true;

    self.addRow = (data) => {
        var row = $("<tr>")
            .attr("id", getRowId(data[params.idKey]));

        if (params.numbered) {
            var numberElement = $("<td>")
                .addClass(TABLE_DISPLAYER_NUMBER_COLUMN_CLASS);
            row.append(numberElement);
        }

        if (!isEmpty(params.columns)) {
            params.columns.forEach((column) => {
                var cellElement = $("<td>")
                    .text(data[column.key])
                    .attr("id", getCellId(data[params.idKey], column.key));
                row.append(cellElement);
            });
        }

        if (!isEmpty(params.actions)) {
            var actions = $("<td>");
            params.actions.forEach((action) => actions.append(getActionElement(action)));
            row.append(actions);
        }

        body.append(row);

        renumberColumns();

        updateNoItemsMessageDisplay();
    }

    self.displayList = (data) => {
        setTableLoading(true);
        body.html("");

        if (!isEmpty(data))
            data.forEach((row) => self.addRow(row));

        renumberColumns();
        updateNoItemsMessageDisplay();

        setTableLoading(false);
    }

    self.deleteRow = (rowId) => {
        body.find("#" + rowId).remove();
        renumberColumns();
        updateNoItemsMessageDisplay();
    }

    self.show = () => {
        display = true;
        table.show();
    }

    self.hide = () => {
        display = false;
        table.hide();
    }

    function getActionElement(action) {
        var actionElement = $('<span>')
            .addClass("glyphicon")
            .addClass(action.icon)
            .css("cursor", "pointer")
            .click(() => onActionClick(action.action,
                {
                    id: data[params.idKey],
                    rowId: getRowId(data[params.idKey]),
                    tableId: getTableId()
                }));
        if (!(action.hint == null))
            actionElement.attr("title", action.hint);
        if (!(action.text == null))
            actionElement.text(action.text);
        return actionElement;
    }

    function onActionClick(action, source) {
        source.table = self;
        action(source);
    }

    function initialise() {
        setTableLoading(true);

        container.html(table);

        table.removeClass();
        table.addClass("table table-hover");
        table.attr("id", getTableId());

        table.html("");
        table.append(header);
        table.append(noItemsMessage);
        table.append(body);

        header.html(getHeader());

        noItemsMessage.append(params.noItems);

        self.displayList(params.data);

        setTableLoading(false);
    }

    function getDefaults() {
        return TABLE_DISPLAYER_DEFAULT_PARAMETERS;
    }

    function setTableLoading(loading) {
        if (loading)
            table.hide();
        else {
            if (display)
                table.show();
        }
    }

    function getHeader() {
        var header = $("<tr>");

        if (params.numbered) {
            var number = $("<th>")
                .text(TABLE_DISPLAYER_NUMBER_COLUMN_NAME);
            header.append(number);
        }

        if (!isEmpty(params.columns)) {
            params.columns.forEach((data) => {
                var column = $("<th>")
                    .text(data.header);
                header.append(column);
            });
        }

        if (!isEmpty(params.actions)) {
            var actions = $("<th>")
                .text(TABLE_DISPLAYER_ACTIONS_COLUMN_NAME);
            header.append(actions);
        }

        return header;
    }

    function renumberColumns() {
        if (!params.numbered)
            return;
        var nextNumber = 1;
        var numberElements = body.find("." + TABLE_DISPLAYER_NUMBER_COLUMN_CLASS);
        $(numberElements).each((index, element) => $(element).text(nextNumber++));
    }

    function getRowId(row) {
        return getTableId() + "_row_" + row;
    }

    function getCellId(row, column) {
        return getRowId(row) + "_column_" + column;
    }

    function getTableId() {
        if (params.name === TABLE_DISPLAYER_DEFAULT_PARAMETERS.name)
            console.warn("Default table name was chosen");
        return "table_" + params.name;
    }

    function updateNoItemsMessageDisplay(clear) {
        var rows = body.find("tr");
        if (rows.length === 0) {
            noItemsMessage.show();
        } else {
            noItemsMessage.hide();
        }
    }

    initialise();
}