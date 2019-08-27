$(function() {
    function init() {
        slideNav()
    }
    function slideNav() {
        $('.menu-box').on('click', function() {
            if ($(this).hasClass('active')) {
                $('nav').removeClass('active')
                $(this).removeClass('active')
            } else {
                $('nav').addClass('active')
                $(this).addClass('active')
            }
        })
    }
    init()
})