function getTeas(callback) {
    $.ajax("/api/tea",
        {
            method: 'GET'
        }
    ).done((teaList) => { callback(teaList) });
}

function getTea(id, callback) {
    $.ajax("/api/tea/" + id,
        {
            method: 'GET'
        }
    ).done((tea) => { callback(tea) });
}

function searchByName(name, strict, callback) {
    $.ajax("/api/tea/SearchByName?teaName=" + name + "&isStrictSearch=" + strict,
        {
            method: 'GET'
        }
    ).done((tealist) => { callback(tealist) });
}

function searchByType(type, strict, callback) {
    $.ajax("/api/tea/SearchByType?teaType=" + type + "&isStrictSearch=" + strict,
        {
            method: 'GET'
        }
    ).done((tealist) => { callback(tealist) });
}