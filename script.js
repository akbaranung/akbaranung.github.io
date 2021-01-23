const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
    scrollOffset : 80
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);