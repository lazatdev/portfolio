window.onload = function(){
    // Scroll To Top
    let scrollTopDiv = document.querySelector(".scroll-top");
    let aboutDiv = document.querySelector(".about");

    window.addEventListener("scroll",displayScrollTopDiv);

    scrollTopDiv.addEventListener("click",scrollToTop);

    function displayScrollTopDiv()
    {
        if(window.scrollY >= aboutDiv.offsetTop)
            scrollTopDiv.style.right = "25px";
        else 
            scrollTopDiv.style.right = "-50px";
    }

    function scrollToTop()
    {
        window.scrollTo({top : 0});
    }

    // Filter
    let categories = document.querySelectorAll(".filter .category");
    let works = document.querySelectorAll(".items .item");

    works.forEach(function(work){
        work.classList.add("show");
    });

    categories.forEach(function(category){
        category.addEventListener("click",function(){
            categories.forEach(function(category){
                category.classList.remove("active");
            });
            category.classList.add("active");
            works.forEach(function(work){
                work.classList.remove("show");
            });
            document.querySelectorAll(category.dataset.category).forEach(function(work){
                work.classList.add("show");
            })
        });

    });

    // The Modal
    let imgs = document.querySelectorAll(".item-img img");
    let titles = document.querySelectorAll(".item-details h3");
    let allModalBox = document.querySelectorAll(".modal-box");
    let modalOverlay;
    
    imgs.forEach(function(img){
        img.addEventListener("click", showModalOverlay);
        img.addEventListener("click", showModal);
    });
    
    titles.forEach(function(title){
        title.addEventListener("click", showModalOverlay);
        title.addEventListener("click", showModal);
    });
    
    document.addEventListener("click", function(e){
        if(e.target.classList.contains("modal-overlay") || e.target.classList.contains("close"))
        {
            modalOverlay = document.querySelector(".modal-overlay");
            modalOverlay.remove();
            allModalBox.forEach(function(modalBox){
                modalBox.classList.remove("show");
            });
        }
    })
    
    function showModalOverlay()
    {
        let modalOverlay = createElement("div","modal-overlay");
        modalOverlay.classList.add("show");
    }

    function showModal(e)
    {
        let modal = `${e.target.dataset.item} .modal-box`;
        document.querySelector(modal).classList.add("show");
    }

    function createElement(tagName, className)
    {
        let element = document.createElement(tagName);
        element.classList.add(className);
        document.body.appendChild(element);
        return element;
    }


    // Full Screen Navigation
    let toggle = document.querySelector(".toggle");

    let links = document.querySelectorAll(".nav-menu li a");

    links.forEach(function(link){
        link.addEventListener("click",function(){
            document.body.style.overflow = "visible";
            document.querySelector("nav").classList.remove("show");
        })
    });

    // Show Full Screen Navigation
    toggle.addEventListener("click",function(){
        document.body.style.overflow = "hidden";
        document.querySelector("nav").classList.add("show");
    });

    // Hide Full Screen Navigation
    let closeBtn = document.querySelector("nav .close-btn");
    closeBtn.addEventListener("click", function(){
        document.body.style.overflow = "visible";
        document.querySelector("nav").classList.remove("show");
    });

}