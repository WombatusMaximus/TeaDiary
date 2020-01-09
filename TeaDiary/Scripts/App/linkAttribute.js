$(document).on('click', '.link', function () {
    $(location).attr('href', $(this).attr('href'));
});