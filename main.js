let home_nav = document.getElementById('home_nav');
let about_nav = document.getElementById('about_nav');
let contact_nav = document.getElementById('contact_nav');
let tips_nav = document.getElementById('tips_nav');
let gallery_nav = document.getElementById('gallery_nav');


console.log(window.location.pathname);
if (window.location.pathname == '/index.html') {
    home_nav.classList.add('active_nav_btn');
}
else if (window.location.pathname == '/pages/about.html') {
    about_nav.classList.add('active_nav_btn');
}
else if (window.location.pathname == '/contact.html') {
    contact_nav.classList.add('active_nav_btn');
}
else if (window.location.pathname == '/tips.html') {
    tips_nav.classList.add('active_nav_btn');
}
else if (window.location.pathname == '/pages/gallery.html') {
    gallery_nav.classList.add('active_nav_btn');
}

