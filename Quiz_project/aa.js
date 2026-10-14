let questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        a: "var",
        b: "int",
        c: "string",
        d: "define",
        answer: "A"
    },
    {
        question: "Which method is used to print output in the console?",
        a: "print()",
        b: "console.log()",
        c: "echo()",
        d: "display()",
        answer: "B"
    },
    {
        question: "Which operator is used for strict equality?",
        a: "==",
        b: "=",
        c: "===",
        d: "!=",
        answer: "C"
    },
    {
        question: "Which keyword is used to declare a constant?",
        a: "var",
        b: "let",
        c: "constant",
        d: "const",
        answer: "D"
    },
    {
        question: "Which method adds an element to the end of an array?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        answer: "A"
    },
    {
        question: "Which data type is used to store text?",
        a: "Number",
        b: "Boolean",
        c: "String",
        d: "Object",
        answer: "C"
    },
    {
        question: "What does typeof do in JavaScript?",
        a: "Deletes a variable",
        b: "Checks the data type",
        c: "Creates a function",
        d: "Loops through an array",
        answer: "B"
    },
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        a: "let",
        b: "var",
        c: "int",
        d: "define",
        answer: "A"
    },
    {
        question: "Which method removes the last element from an array?",
        a: "shift()",
        b: "remove()",
        c: "delete()",
        d: "pop()",
        answer: "D"
    },
    {
        question: "Which symbol is used for a single-line comment?",
        a: "/*",
        b: "//",
        c: "#",
        d: "<!--",
        answer: "B"
    },
    
];
let i=0;
let n=questions.length

let Quiz=document.getElementById("Quiz")
let container=document.getElementById("container")
let btn=document.getElementById("btn")

btn.addEventListener("click",e=>{
    btn.innerHTML=""
    btn.innerHTML="Next"
    e.preventDefault()
    display()
    reset()
    again()

})

function display(){
    container.innerHTML=""
    container.innerHTML=`<div class="question">${questions[i].question}</div>
    <div class="answers">a. ${questions[i].a}</div>
    <div class="answers">b. ${questions[i].b}</div>
    <div class="answers">c. ${questions[i].c}</div>
    <div class="answers">d. ${questions[i].d}</div>
    `
    i++
}
function reset(){
    if(i==n-1){
        btn.innerHTML=""
        btn.innerHTML="submit"
        
    }
}
    function again(){
        if(i==n){
            btn.innerHTML=""
            btn.innerHTML="Restart Quiz"
            container.innerHTML="Restart the Quiz....."
            i=0
        }

    }