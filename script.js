// Questions and options for the quiz
let questions =[ 
    {
        Number: 1,
        question: "Inside which HTML elelment do we put the JavaScript?",
        options: {
            A: "<js>",
            B: "<script>",
            C: "<javascript>",
            D: "jscript",
        },
        correctanswer:'B'
    },
{
    Number: 2,
    question: "Which of the following function of Number object returns the number's value?",
    options: {
        A: "toString()",
        B: "valueOf()",
        C: "toLocaleString()",
        D: "toPrecision()",
    },
    correctanswer: 'B'
},
{
    Number: 3,
    question: "Which of the followong function of Array object reprsents the source code of an object",
    options: {
        A: "toSource",
        B: "splice",
        C: "toString",
        D: "Unshift",
    },
    correctanswer: 'A',
},
{
    Number: 4,
    question : "Which built-in method returns the characters in a string beginning at the specified location?",
    options: {
        A: "substr()",
        B: "getSubstring",
        C: "slice",
        D: "None of the above",
    },
    correctanswer: 'A',
},
{
    Number: 5,
    question: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
    options: {
        A: "join()",
        B: "lastIndexOf()",
        C: "indexOf()",
        D: "map()",
    },
    correctanswer: "C",
},
]

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = () => {
    info_box.classList.add("activateInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeateInfo");
}
continue_btn.onclick = () => {
    info_box.classList.remove("activeateInfo");
    quiz_box.classList.add("activateQuiz");
    showQuestions(0);
    quecounter (1);
    starttimer (60);
    starttimerline (0)
}

let timeValue = 60;
let quecount = 0;
let que_numb = 5
let counter;
let counterline;
let widthvalue =0

const restart_quiz

