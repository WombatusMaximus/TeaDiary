function ApiQueries() {
    var self = this;
    self.getTeas = (successCallback, errorCallback) => {
        $.ajax("/api/tea",
            {
                method: 'GET',
                error: errorCallback,
                success: (teaList) => successCallback(teaList)
            }
        );
    }

    self.getTea = (id, successCallback, errorCallback) => {
        $.ajax("/api/tea/" + id,
            {
                method: 'GET',
                error: errorCallback,
                success: (tea) => successCallback(tea)
            }
        );
    }

    self.searchByName = (name, strict, successCallback, errorCallback) => {
        $.ajax("/api/tea/SearchByName?teaName=" + name + "&isStrictSearch=" + strict,
            {
                method: 'GET',
                error: errorCallback,
                success: (teaList) => successCallback(teaList)
            }
        );
    }

    self.searchByType = (type, strict, successCallback, errorCallback) => {
        $.ajax("/api/tea/SearchByType?teaType=" + type + "&isStrictSearch=" + strict,
            {
                method: 'GET',
                error: errorCallback,
                success: (teaList) => successCallback(teaList)
            }
        );
    }
}