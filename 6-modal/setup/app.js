// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".closeBtn");


modalBtn.addEventListener("click",function(){
    modal.classList.add("open-modal")
});

closeBtn.addEventListener("click",function(){
    modal.classList.remove("open-modal")
});

/*
## 1.Mindset behind the code
1.Make sure that every html content is exactly same as in the instructions video;
2.Utilize the develpoer tool inspect the html content in the finall file in the browser and 
the set up file in the browser;
## 2. Resourcelist:
1.EventTarget.addEventListener()
2.DOMTokenList
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList#Examples
1
*/