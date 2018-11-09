$(document).ready(function () {
    $(".nav-item").hover(function () {
        $(this).find(".dropdown-menu").slideToggle("slow");
    })

    $(".scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
})



var scrollToTop = document.querySelector(".scrollToTop");

scrollToTop.addEventListener("click", function (e) {
    console.log(e.pageY);
})

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        scrollToTop.classList.add("active");
    } else {
        scrollToTop.classList.remove("active");
    }
})

//MOBILE NAV OPEN//CLOSE

var navToggleButton = document.querySelector(".nav-toggle-icon");
var mobileNav = document.querySelector(".mobile-nav");
var mobileNavListItems = document.querySelectorAll(".mobile-nav .mobile-nav-list-item");


navToggleButton.addEventListener("click", function () {
    if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
    }
    else {
        mobileNav.classList.add("active");
    }
})

for (var ListItem of mobileNavListItems) {
    ListItem.addEventListener("click", function () {
        if (this.lastElementChild.classList.contains("active")) {
            this.lastElementChild.classList.remove("active");
        }
        else {
            this.lastElementChild.classList.add("active")
        }
    })
}


//MOBILE NAV OPEN//CLOSE END

//ACCORDION COLOR CHANGES

var accordionButtons = document.querySelectorAll(".btn-link");
var cardHeaders = document.querySelectorAll(".accordion .card-header");
for(var accordionButton of accordionButtons){
    accordionButton.addEventListener("click",function(){
        if( !this.parentElement.parentElement.classList.contains("active")){
            this.parentElement.parentElement.classList.add("active");
        }else{
            this.parentElement.parentElement.classList.remove("active")
        }
    })
}
