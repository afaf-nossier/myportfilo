let about=document.querySelector(".about");
let logo_Img=document.querySelector(".logoImg img");
let port=document.querySelector(".port");
let btn_up=document.querySelector(".btnup")

window.onscroll = function () {
    if (this.scrollY >= 550) {
        about.classList.add("toscroll");
        logo_Img.classList.add("hiddenImg");
        port.style.opacity="1" ;
        btn_up.style.opacity="1" 
    
    } else {
        about.classList.remove("toscroll");
        logo_Img.classList.remove("hiddenImg");
        port.style.opacity="0" ;
        btn_up.classList.add("button_scroll")
        btn_up.style.opacity="0" 
        

    }
};
btn_up.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};

let tablinks=document.querySelectorAll(".tab_links");
let tabcontents=document.querySelectorAll(".tab_contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active_link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab")

}
//______________________________________________________-
let list_lis=document.querySelectorAll(".list li");

function activelist( ){
    
    list_lis.forEach((li) => {
        event.currentTarget.classList.add("active")
        li.classList.remove("active")
    });
    

}







