document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navigation-wrap"),
        navToggler = document.querySelector(".navbar-toggler"),
        navCollapse = document.querySelector(".navbar-collapse");

    // Toggle navbar visibility on scroll
    window.onscroll = () => nav.classList.toggle("scroll-on", document.documentElement.scrollTop > 20);

    // Restore toggler state across pages
    if (sessionStorage.getItem("navOpen") === "true") navCollapse.classList.add("show");

    // Toggle menu open/close
    navToggler?.addEventListener("click", () => {
        let isOpen = navCollapse.classList.toggle("show");
        sessionStorage.setItem("navOpen", isOpen ? "true" : "false");
    });

    // Close navbar when clicking a nav link
    document.querySelectorAll(".nav-link").forEach(link =>
        link.addEventListener("click", () => {
            navCollapse.classList.remove("show"); // Close menu
            sessionStorage.setItem("navOpen", "false"); // Reset sessionStorage
        })
    );
});



document.addEventListener("DOMContentLoaded",()=>{
    function counter (id ,start ,end,duration){
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(()=>{
                current += increment;
                obj.textContent = current;
                if(current == end){
                    clearInterval(timer);
                }
            },step);
    }
    counter("count1",0,800,2000);
    counter("count2",0,200,2000);
    counter("count3",0,600,2000);
    counter("count4",0,100,2000);
});
