let carousel = document.querySelector(".carousel ")
let carousel_itemS = document.querySelectorAll(".carousel .items .item")
let nxtbtn = document.querySelector(".nextbtn .rtbtn")
let prvbtn = document.querySelector(".nextbtn .lftbtn")
let currentIndex = 0 ;
let visibleIndex = 3 ;

function updateCrousal() {
    carousel_itemS.forEach((item , index) => {
        if(index >= currentIndex && index < currentIndex + visibleIndex) {
            item.style.display = "block";
            item.style.transition = "transform 0.5s ease" ; 
    }else {
         item.style.display = "none"
    }
    })
    
}

nxtbtn.addEventListener("click" , function() {
    currentIndex += visibleIndex
    if( currentIndex >= carousel_itemS.length) currentIndex=0;
    updateCrousal()
})
prvbtn.addEventListener("click" , function() {
    currentIndex -= visibleIndex
    if( currentIndex < 0) {
        currentIndex = carousel_itemS.length - visibleIndex;
        if(currentIndex < 0) currentIndex = 0;
    } 
    updateCrousal()
})


updateCrousal()
