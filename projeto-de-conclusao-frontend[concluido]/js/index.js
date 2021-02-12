function softScrollTo(y) {
    const diff = (y - window.scrollY);
    const step = diff/100;
    let acc = window.scrollY;
    const timer = setInterval(() => {
        if (acc >= y) clearInterval(timer);
        acc += step;
        window.scroll(0, acc);
    }, 1)
}

const navLinks = Array.from(document.querySelectorAll("[data-target"))
    
navLinks.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        softScrollTo((document.getElementById(e.target.dataset.target)).getBoundingClientRect().y);
    }
})