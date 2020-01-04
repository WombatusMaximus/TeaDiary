function ApiQueries() {
    var self = this;
    self.getTeas = (callback) => {
        $.ajax("/api/tea",
            {
                method: 'GET'
            }
        ).done((teaList) => { callback(teaList) });
    }

    self.getTea = (id, callback) => {
        $.ajax("/api/tea/" + id,
            {
                method: 'GET'
            }
        ).done((tea) => { callback(tea) });
    }

    self.searchByName = (name, strict, callback) => {
        $.ajax("/api/tea/SearchByName?teaName=" + name + "&isStrictSearch=" + strict,
            {
                method: 'GET'
            }
        ).done((tealist) => { callback(tealist) });
    }

    self.searchByType = (type, strict, callback) => {
        $.ajax("/api/tea/SearchByType?teaType=" + type + "&isStrictSearch=" + strict,
            {
                method: 'GET'
            }
        ).done((tealist) => { callback(tealist) });
    }
}