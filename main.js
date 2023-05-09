let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (Math.floor(scrollPosition) >= 100) {
        header.style.position = 'sticky';
        header.style.top = '0';
    }else{
        header.style.position = 'relative';
    }
});
