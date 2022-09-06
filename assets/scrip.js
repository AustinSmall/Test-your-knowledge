// Questions and answers for the quiz
var questions =[ 
    {
    question: "Inside which HTML elelment do we put the JavaScript> ",
    answers: {
        A: "<js>",
        B: "<script>",
        C: "<javascript>",
        D: "jscript",
    },
    correctanswer: "B"
 },
{
    question: "Which of the following function of Number object returns the number's value?",
    answers: {
        A: "toString()",
        B: "valueOf()",
        C: "toLocaleString()",
        D: "toPrecision()",
    },
    correctanswer: "B"
},
{
    question: "Which of the followong function of Array object reprsents the source code of an object",
    answers: {
        A: "toSource",
        B: "splice",
        C: "toString",
        D: "Unshift",
    },
    correctanswer: "A",
},
{
    question : "Which built-in method returns the characters in a string beginning at the specified location?",
    answers: {
        A: "substr()",
        B: "getSubstring",
        C: "slice",
        D: "None of the above",
    },
    correctanswer: "A",
},
{
    question: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
    answers: {
        A: "join()",
        B: "lastIndexOf()",
        C: "indexOf()",
        D: "map()",
    },
    correctanswer: "C",
},
];

function showquestions (questions, quizContainer) {
    var output = [];
    var answers;
    
    for(var i=0; i<questions.length; i++) {
        answers = [];
        for(letter in questions[i].answers){
            answers.push(
                '<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
            );
        }
        output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
    quizContainer.innerhtml= output.join('')
    
}
showquestions(questions,quizContainer);

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('score');
var submitButton = document.getElementById('finish');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);
