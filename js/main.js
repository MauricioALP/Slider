$(document).ready(function() {
    var imgItems = $('.slider li').length;
    var imgPos = 1;

    for (i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li><span class="fa fa-circle"></span><li>')
    }
    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({ 'color': '#CD6E2E' });
});