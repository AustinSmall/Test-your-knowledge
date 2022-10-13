
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
var scoreAreaEl = document.querySelector('#scoreArea');
var inNameEl = document.querySelector('#inName');
var buttonDivEl = document.querySelector('#saveButton');
var highScoreEl = document.querySelector('#highScores')

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}


exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(60); 
    startTimerLine(0); 
}

let timeValue =  ("");
let que_count = 0;
let que_numb = 1;
let totalpoints = 100;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    next_btn.classList.remove("show"); 
}


quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        next_btn.classList.remove("show"); 
    }else{
        showResult();
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let checkIconTag = '<div class="icon check">✅ /div>';
let crossIconTag = '<div class="icon cross"> ❌</div>';


function optionSelected(answer){
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){
        userScore += 20; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", checkIconTag); 
        console.log("Correct Answer");
        console.log("Your total score = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");
        timeCount.textContent -=5;
        
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", checkIconTag); 
                console.log("Auto selected correct answer.");
            }
        }

    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 80){ 
        
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ totalpoints +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 70){ 
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ totalpoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ totalpoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

function startTimerLine(time){
    counterLine = setInterval(timer, 116);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        
    }
}

function gameOver() {
    clearInterval(runningTimer);
    countdownEl.innerHTML = "Finished";
    displayScore();
    savedScore ();
}

// once all questions have been answered give me a final score 
function displayScore () {
    questionConEl.replaceWith(result_box);
    scoreAreaEl.innerText = "Final Score:" + score;
     // Create an input element for initials 
    initTextEl = document.createElement("input"); 
    initTextEl.setAttribute("id", "initails-input"); 
    initTextEl.setAttribute("type", "text"); 
    initTextEl.setAttribute("name", "iniatials"); 
    initTextEl.setAttribute("placeholder", "Enter Initials here"); 
      
    inNameEl.appendChild(initTextEl);


    // create save button elemetn
    saveButtonEl = document.createElement("button");
    saveButtonEl.setAttribute("id" , "save-btn");
    saveButtonEl.setAttribute("class" ,"save-btn");
    saveButtonEl.setAttribute("type" , "submit");
    saveButtonEl.textContent = "Save Score";

    inNameEl.appendChild(saveButtonEl);

    inNameEl.addEventListener("submit", viewHighScores);
}

function viewHighScores (e) { 
  e.preventDefault();
    var name = document.querySelector("#initails-input").value;
    savedInit(name);
    
    scorePageEl.replaceWith(highScoreEl)
    loadSaveScores();
  
}


//function to save task in local storage 
var savedScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}
var savedInit = function(initails) {
    localStorage.setItem("initails", JSON.stringify(initails));
}

// gets tasks from local storage and load them
function loadSaveScores() {
    // get tasks items from local stroage
    var savedScore = localStorage.getItem("score");
    var savedInit = localStorage.getItem("initails");

    savedScore  = JSON.parse(savedScore);
    savedInit = JSON.parse(savedInit);

    document.getElementById("highScores").innerHTML = savedInit + " - " + savedScore;
   
}   