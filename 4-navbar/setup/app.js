// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    //console.log(links.classList);
    //console.log(links.classList.contains("random"));
    //if(links.classList.contains("show-links")){
    //    links.classList.remove("show-links");
    //} else {
    //   links.classList.add("links");
    //} 
    links.classList.toggle("show-links");

});

/*
## 1.Code reading thoughts:
1. Build the const via the document.querySelector to choose the toggle and and the links;
2. Use the addEventListener to build a event that: you click the toogle, then it will generate a function which use the 
DOMTokenList Toggle decide if you want to show the links;

## 2. Resources Link:
1.Multi-line Comments
https://www.w3schools.com/js/js_comments.asp

2.EventTarget.addEventListener()
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Examples

3.Event reference
https://developer.mozilla.org/en-US/docs/Web/Events

4.DOMTokenList
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList#Examples

5.if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#Examples

6.HTML DOM firstChild Property
https://www.w3schools.com/jsref/prop_node_firstchild.asp
*/