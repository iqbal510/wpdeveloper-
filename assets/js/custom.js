$(document).ready(function () {
    $('.progresses').each(function (i) {
        var width = $(this).data('width');
        $(this).width(width);
    });
});