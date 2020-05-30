let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav-links')
let links = document.querySelectorAll('.nav-links li')

function slider(){
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
        links.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinksFade .5s ease forwards ${index/7 + 0.3}s`
            }
        })
    })
}
slider()


function getBodyScrollTop() {
    let offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);

    if (offset > screen.height - 800) {
        document.querySelector('header').className = "fixed-menu-top";
    }
}
window.addEventListener("scroll", getBodyScrollTop);