window.onscroll = function() {
    let scrolled = window.pageYOffset;
    let docHeight = document.body.scrollHeight;
    let winHeight = window.innerHeight;
    console.log(scrolled, docHeight, winHeight);
    document.querySelector('.scroll-indicator').style.width = ((scrolled / (docHeight - winHeight)) * 100) + '%'
}

