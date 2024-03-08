let crisisButton = document.getElementById("crisisFunFactButton");
let riseButton = document.getElementById("riseFunFactButton");
let fallButton = document.getElementById("fallFunFactButton");
let quizDiv = document.getElementById('quizdiv');
let submitButton = document.getElementById('submit');

// when a fun fact button is clicked, it will display an alert message containing a fun fact
function displayFunFact(event) {
    if (event === 'founding') {
        alert("When Rome was founded it was just a small village on the Tiber river.");
    }
    if (event === 'republic') {
        alert("The Roman republic lasted over 500 years making it and the Roman empire one of the longest lasting empires ever.");
    }
    if (event === 'latin') {
        alert("Despite all of the territory being taken over by Rome many of the towns were still allowed to keep local governments.");
    }
}

// event listeners to change the color of the fun fact buttons whenever they are hovered or not hovered over
crisisButton.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.background = "red";
    },
);

crisisButton.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.background = "rgb(228, 224, 224)";
    },
);

riseButton.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.background = "red";
    },
);

riseButton.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.background = "rgb(228, 224, 224)";
    },
);

fallButton.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.background = "red";
    },
);

fallButton.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.background = "rgb(228, 224, 224)";
    },
);

var coll = document.getElementsByClassName("collapsib");
var i;

// used to collapse or uncollapse the information in the event sections
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("activ");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// array containing the quiz questions
let questions = [
    {
        question: "1. Who founded Rome?",
        answers: {
            a: "Julius Ceaser",
            b: "Scipio",
            c: "Romulus and Remus"
        },
        solution: "c"
    },
    {
        question: "2. What government was overthrown?",
        answers: {
            a: "Tyranny",
            b: "Democracy",
            c: "Communism"
        },
        solution: "a"
    },
    {
        question: "3. What war provoked the Latins to fight the Romans?",
        answers: {
            a: "The first Punic war",
            b: "The first Samnite war",
            c: "The second Punic war"
        },
        solution: "b"
    }
];

let quizArr = [];
questions.forEach(
    (q, num) => {

        let answers = [];

        for (let i in q.answers) {

            answers.push(`
          <p>
            <input type="radio" name="questiondiv${num}" value="${i}">
            <em>${i}.</em>
            ${q.answers[i]}
          </p>
          `);
        }

        quizArr.push(`
      <div class="questiondiv"> ${q.question} 
      </div>
      <div class="answers"> ${answers.join('')}
       </div>
        `);
    }
);

//removes commas from string
quizDiv.innerHTML = quizArr.join('');

// collapses or uncollapses the quiz 
var toggleButton3 = document.getElementById('toggleCardButton3');
var card3 = document.getElementById('card3');
var collapsableCard3 = new bootstrap.Collapse(card3, { toggle: true });

toggleButton3.addEventListener('click', function () {
    collapsableCard3.toggle();
});

let scoreSpot = document.getElementById("score");
let scoreTxt = document.createElement("p");

// if quiz submitted, color correct and incorrect questions
submitButton.addEventListener('click',
    function () {

        let answerDiv = quizDiv.querySelectorAll('.answers');
        let questionSelected = quizDiv.querySelectorAll('.questiondiv');
        let counter = 0;

        questions.forEach(
            (q, num) => {
                let selectedAns = (answerDiv[num].querySelector(`input[name=questiondiv${num}]:checked`)).value;

                // set questions with the right answer to green
                if (selectedAns === q.solution) {
                    questionSelected[num].style.fontWeight = '900';
                    questionSelected[num].style.color = 'lightgreen';
                    counter = counter + 1;
                }
                // set questions with the wrong answer to red
                else {
                    questionSelected[num].style.fontWeight = '900';
                    questionSelected[num].style.color = 'red';
                }

            });

        // display the number of correct answers that the user got
        scoreTxt.innerHTML = `<p class="quizAnswer">You got <strong>${counter} out of 3</strong> correct</p>`;
        scoreSpot.appendChild(scoreTxt);

    });
