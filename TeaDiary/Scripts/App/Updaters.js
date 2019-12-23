function addTea(tea, callback) {
    $.ajax("/api/tea/",
        {
            method: 'POST',
            data: tea
        }
    ).done((response) => { callback(response) });
}

function updateTea(tea, callback) {
    $.ajax("/api/tea/",
        {
            method: 'PUT',
            data: tea
        }
    ).done((response) => { callback(response) });
}

function deleteTea(id, callback) {
    $.ajax("/api/tea/"+id,
        {
            method: 'DELETE'
        }
    ).done((response) => { callback(response) });
}