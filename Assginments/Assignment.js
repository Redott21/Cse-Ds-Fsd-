// Quiz questions
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Multi Language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property controls text size?",
        options: [
            "font-style",
             "text-size",
              "font-size", 
              "text-style"
            ],
        correct: 2
    },
    {
        question: "Inside which tag do we write JavaScript?",
        options: [
            "<js>", 
            "<script>",
             "<javascript>",
              "<scripting>"
            ],
        correct: 1
    }
];


const registrationForm = document.getElementById("registrationForm");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const questionsDiv = document.getElementById("questions");
const userInfo = document.getElementById("userInfo");
const scoreText = document.getElementById("scoreText");


document.getElementById("startBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("rollNumber").value;
    const branch = document.getElementById("branch").value;

    if (name === "" || roll === "" || branch === "") {
        alert("Please fill all the fields!");
        return;
    }

    userInfo.textContent = "Name: " + name + " | Roll: " + roll + " | Branch: " + branch;

    
    let html = "";
    for (let i = 0; i < questions.length; i++) {
        html += "<div class='question'>";
        html += "<p>" + (i + 1) + ". " + questions[i].question + "</p>";
        for (let j = 0; j < questions[i].options.length; j++) {
            html += "<label class='option'>";
            html += "<input type='radio' name='q" + i + "' value='" + j + "'> ";
            html += questions[i].options[j];
            html += "</label>";
        }
        html += "</div>";
    }
    questionsDiv.innerHTML = html;

    
    registrationForm.style.display = "none";
    quizSection.style.display = "inline-block";
});


document.getElementById("submitBtn").addEventListener("click", function () {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const selected = document.querySelector("input[name='q" + i + "']:checked");
        if (selected && parseInt(selected.value) === questions[i].correct) {
            score++;
        }
    }

    scoreText.textContent = "You scored " + score + " out of " + questions.length;

    quizSection.style.display = "none";
    resultSection.style.display = "inline-block";
});


document.getElementById("restartBtn").addEventListener("click", function () {
    registrationForm.reset();
    resultSection.style.display = "none";
    registrationForm.style.display = "inline-block";
});