//using selectors inside the element
// traversing the dom

const questions = document .querySelectorAll(".question");
console.log(questions)
questions.forEach(function(question){
    console.log(question)
    const btn = question.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
        if (item !== question) {
            item.classList.remove("show-text");

        }
    });

    question.classList.toggle("show-text");

    });
});

/*

## 1. Logci thinking:
1. Use the For each to locate the cetain button which you clicked;
2. add the show-text in the question text calss to show or off the text;

## 2. Resourcelist:

*/