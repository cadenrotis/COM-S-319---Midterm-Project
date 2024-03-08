let firstButton = document.getElementById("firstFunFactButton");
let secondButton = document.getElementById("secondFunFactButton");
let thirdButton = document.getElementById("thirdFunFactButton");
let quizDiv = document.getElementById('quizdiv');
let submitButton = document.getElementById('submit');

// when a fun fact button is clicked, it will display an alert message containing a fun fact
function displayFunFact(event) {
    if (event === 'first') {
        alert("The Romans modeled their ships after the Carthaginians after one of their ships washed up on the shore of Rome.");
    }
    if (event === 'second') {
        alert("The elephants the Carthaginians used in the war were an extinct elephant species known as Syrian elephants, that were twice the size of modern African elephants.");
    }
    if (event === 'third') {
        alert("During this war Scipio became the youngest Roman Consul ever and they actually lifted the age restriction for him.");
    }
}

// event listeners to change the color of the fun fact buttons whenever they are hovered or not hovered over
firstButton.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.background = "red";
    },
);

firstButton.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.background = "rgb(228, 224, 224)";
    },
);

secondButton.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.background = "red";
    },
);

secondButton.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.background = "rgb(228, 224, 224)";
    },
);

thirdButton.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.background = "red";
    },
);

thirdButton.addEventListener(
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
        question: "1. Where did a Majority of the fighting take place?",
        answers: {
            a: "Rome",
            b: "Carthage",
            c: "Sicily"
        },
        solution: "c"
    },
    {
        question: "2. Who was the Carthanginian commander?",
        answers: {
            a: "Hannibal",
            b: "Scipio",
            c: "Julius Ceaser"
        },
        solution: "a"
    },
    {
        question: "3. What land did Rome gain from this war?",
        answers: {
            a: "Iberia",
            b: "Africa",
            c: "Italy"
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
