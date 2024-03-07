let crisisButton = document.getElementById("crisisFunFactButton");
let riseButton = document.getElementById("riseFunFactButton");
let fallButton = document.getElementById("fallFunFactButton");
let quizDiv = document.getElementById('quizdiv');
let submitButton = document.getElementById('submit');

// when a fun fact button is clicked, it will display an alert message containing a fun fact
function displayFunFact(event) {
    if (event === 'crisis') {
        alert("Emperor Alexander Severus was well known for his love of philosophy and intellectual pursuits. He was one of the youngest emperors in Roman history, having succeeded to the throne at the age of 13. He was known for his quest of wisdom and intellectual curiosity, even though he was still a young man. He surrounded himself with smart philosophers and advisors and had a strong interest in philosophy. But difficulties and disputes dogged his reign, which finally resulted in his death at the age of 26.");
    }
    if (event === 'rising') {
        alert("The Eastern Empire of Rome was called the Byzantine Empire. It continued for more than a millennium until the collapse of the Western Roman Empire in 476 AD.  The Byzantine Empire left a lasting legacy that still has an impact on Eastern Europe and the Mediterranean region today. It made major contributions to literature, art, architecture, and law.");
    }
    if (event === 'fall') {
        alert("The Visigoths were one of the two main branches of the Goths, who played a significant role in the downfall of the Western Roman Empire. Following their victory over the armies of the Western Roman Empire in the Battle of Adrianople in 378 AD, the Visigoths went on to found their own kingdom in the Iberian Peninsula (present-day Spain and Portugal). They dominated this area for several centuries, having a profound effect on Spanish history and culture.");
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
        question: "1. What was the cause of death for Emperor Alexander Severus?",
        answers: {
            a: "Illness",
            b: "Died while in war",
            c: "Killed by his own troops"
        },
        solution: "c"
    },
    {
        question: "2. What solution did Emperor Diocletian come up with to solve the issues the Roman Empire were facing?",
        answers: {
            a: "Split the Roman Empire into the Western Empire and Eastern Empire",
            b: "Hire more troops",
            c: "Raid the Goths"
        },
        solution: "a"
    },
    {
        question: "3. What group of people caused major damage to the city of Rome?",
        answers: {
            a: "The Ottoman Empire",
            b: "The Visigoths",
            c: "The Eastern Roman Empire"
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
let counter = 0;

// if quiz submitted, color correct and incorrect questions
submitButton.addEventListener('click',
    function () {

        let answerDiv = quizDiv.querySelectorAll('.answers');
        let questionSelected = quizDiv.querySelectorAll('.questiondiv');

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