let menuList = document.getElementById('menu-list');
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:true,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:2
        },
        1900:{
            items:2
        }
    }
})


window.addEventListener("load",function() {
    const loader = document.querySelector(".load");

    setTimeout(() => {
        loader.classList.add('load-hidden');
    }, 2000);

    loader.addEventListener("transitionend", ()=> {
        setTimeout(() => {
            this.document.body.removeChild('load');
        }, 30000);
    })
})




