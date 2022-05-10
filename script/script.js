// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar'); 
//the query selector returns the first element that matches the CSS selector
window.onscroll = function() { //Fires up when the scroll event happens
    var top = window.scrollY; //returns the number of pixels that the document is scrolled vertically
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.getElementById("btn-dark-tower").onclick=function({
    document.getElementById("popup-dark-tower").show();
})
