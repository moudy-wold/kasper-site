let bullets = document.querySelectorAll('.bullets ul li'),
    arrowLeft = document.querySelector('.landing .fa-arrow-left'),
    arrowRight = document.querySelector('.landing .fa-arrow-right'),
    backImgs = ["url('./imgs/landing.jpg')", "url('./imgs/shahin-2.jpg')", "url('./imgs/shahin-5.jpg')"],
    landing = document.querySelector('.landing'),
    count = 0,
    toggle = document.querySelector('.toggle-menu'),
    navUl = document.querySelector('.header nav .ul'),
    navLinks = document.querySelectorAll('.header ul li a'),
    skills = document.querySelector(".skills"),
    skillporgress = document.querySelectorAll('.skills .progrss .front-prog'),
    progNumber = document.querySelectorAll('.skills .progrss .number-prog');

navLinks.forEach(link => {
    link.onclick = function() {
        // window.scrollTo(0, 100)
        scroll({
            top: document.querySelector('.' + this.innerHTML).offsetTop,
            behavior: "smooth"
        })
    }
})

// remove active Class from All bullt
function removeActivebullte() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove('active');
    }

}
// set landing background
bullets.forEach(bullet => {
    bullet.onclick = function() {
        landing.style.backgroundImage = backImgs[this.dataset.count];
        removeActivebullte()
        this.classList.add('active');
    }
})

// function setArrow(direction, opr) {
arrowLeft.onclick = function() {
    if (count > 0) {
        count--
        landing.style.backgroundImage = backImgs[count];
        removeActivebullte();
        bullets[count].classList.add('active');
    } else {
        count;
    }
}

arrowRight.onclick = function() {
    if (count < backImgs.length - 1) {
        count++;
        landing.style.backgroundImage = backImgs[count];
        removeActivebullte();
        bullets[count].classList.add('active');
    } else {
        count;
    }
}

//Set Toggle Menu
toggle.onclick = function() {
    navUl.classList.toggle('active');
}

// Set Progress 
window.onscroll = function() {
    if (window.scrollY >= skills.offsetTop - 190) {
        skillporgress.forEach(prog => {
            prog.style.width = prog.dataset.number;
        })
        progNumber.forEach(numb => {
            numb.style.left = parseInt(numb.dataset.number) - 4 + "%";
        })
    }
}