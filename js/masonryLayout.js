$(document).ready(function () {
    $('.post_container').masonry({
        itemSelector: '.post',
        columnWidth: '.post',
        columnWidth: '.post-sizer',
        percentPosition: true,
    });
});