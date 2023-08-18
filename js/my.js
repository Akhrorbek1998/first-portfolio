let arr = [];

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => arr.push(data) )
.catch(err => console.log(err))

console.log(arr);


window.addEventListener("DOMContentLoaded", ()=> {
    window.addEventListener("scroll", ()=> {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    });

    // hamburger btn
    const menuBtn = document.querySelector(".btn-hamburger");
    const navigation = document.querySelector(".navbar");
    const menuLink = document.querySelectorAll(".nabar-link");
    menuBtn.addEventListener("click", ()=> {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    });
    
    menuLink.forEach(link => {
        link.addEventListener("click", ()=> {
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
        })
    });

    const scrolllBtn = document.querySelector(".scrolToTop-btn");
    window.addEventListener("scroll", ()=> {
        scrolllBtn.classList.toggle("active", window.scrollY > 500)
    });

    scrolllBtn.addEventListener("click", ()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener("scroll", ()=> {
        let reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("active")
            }
            
        }
    });

    //modal 
    const modalWrapper = document.querySelector("#modal");
    const modalBtns = document.querySelectorAll(".btn");
    const closeBtnModal = document.querySelector(".close");


    function show() {
        document.body.style.overflow = "hidden";
        modalWrapper.style.display = "block"
    };


    function hide() {
        modalWrapper.style.display = "none";
        document.body.style.overflow = ''
    }
    modalBtns.forEach(btn => {
        btn.addEventListener("click", show)
    });

    closeBtnModal.addEventListener("click", hide);

    modalWrapper.addEventListener("click", (e)=> {
        if (e.target === modalWrapper) {
            modalWrapper.style.display = "none"
            hide()
        }
    });

    const modalTimer = setTimeout(show, 3000);



})

