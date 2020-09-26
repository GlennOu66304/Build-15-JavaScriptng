// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function(){
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide")
        video.play();
    }
});

//preloader
const preloader = document.querySelector(".preloader")

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
});

/*
## 1.Logic thinking:
1. add a slide into the button, this slide will show the play and pause option; 
2. according to the option to pasus the video and paly the video;
3. add the preloader function to allow the page for the browswer to see the funny gift page;

##. 2 resource list:
1. <video>: The Video Embed element
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes
2.<span>
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span#Example
3.HTML <img> Tag
https://www.w3schools.com/tags/tag_img.asp#:~:text=The%20tag%20is%20used,the%20path%20to%20the%20image
4.You can get pretty far in making a slider with just HTML and CSS
https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css/

*/