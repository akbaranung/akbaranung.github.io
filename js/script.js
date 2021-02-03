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

var preloader = document.getElementById('loading');
function myFunction(){
	preloader.style.display='none';
};

const sr = ScrollReveal({
    origin : 'top',
    distance: '100px',
    duration: 2000,
    reset: true
})

sr.reveal('.title h2', {})
sr.reveal('.title p', {origin:'top', delay:200})
sr.reveal('.title .button', {origin:'right', delay:400})


sr.reveal('.about img', {origin: 'left', delay:500})
sr.reveal('.about h5', {origin:'top', delay:300})
sr.reveal('.about p', {origin:'top', delay:400})

sr.reveal('.skills img', {interval:200})

sr.reveal('.portfolio img', {origin:'left', interval:200})

sr.reveal('.contact a', {interval:200})
