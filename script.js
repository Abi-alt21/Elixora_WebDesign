const questions =[
    {
        text: "How does your skin feel after cleansing?",
        options: ["dry", "oily", "normal", "combination"]
    },
    {
        text: "What is your biggest skin concern?",
        options: ["acne", "wrinkles", "dark-spots", "hydration"]
    },
    {
        text: "What do you feel most often on your facial skin?",
        options: ["Acne and blackheads", "Skin feels dry and flaky", "Skin looks oily and shiny", "Skin looks dull and lacks radiance"]
    },
    {
        text: "How often do you exercise in a week?",
        options: ["Every day", "3-4 times", "1-2 times", "Never"]
    },
    {
        text: "How often do you use sunscreen?",
        options: ["Every day", "3-4 times", "1-2 times", "Never"]
    }
];

document.getElementById('startQuizBtn').onclick = function() {
    document.getElementById('myModal').style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `<p>${questions[currentQuestion].text}</p>`;
    questions[currentQuestion].options.forEach(option => {
        questionContainer.innerHTML += `<label><input type="radio" name="q${currentQuestion + 1}" value="${option}"> ${option}</label><br>`;
    });
}

document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

document.getElementById('nextBtn').onclick = function() {
    if (document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`)) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            document.getElementById('myModal').style.display = "none";
            calculateResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

let currentQuestion = 0;
function calculateResult() {
    let scoreDry = 0;
    let scoreOily = 0;
    let scoreNormal = 0;
    let scoreCombination = 0;

    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const value = selectedOption.value;
            if (i === 1) {
                if (value === "dry") scoreDry++;
                if (value === "oily") scoreOily++;
                if (value === "normal") scoreNormal++;
                if (value === "combination") scoreCombination++;
            } else if (i === 2) {
                if (value === "hydration") scoreDry++;
                if (value === "acne") scoreOily++;
                if (value === "dark-spots") scoreNormal++;
                if (value === "hydration") scoreCombination++;
            } else if (i === 3) {
                if (value === "Acne and blackheads") scoreDry++;
                if (value === "Skin feels dry and flaky") scoreOily++;
                if (value === "Skin looks oily and shiny") scoreNormal++;
                if (value === "Skin looks dull and lacks radiance") scoreCombination++;
            } else if (i === 4) {
                if (value === "Every day") scoreDry++;
                if (value === "3-4 times") scoreOily++;
                if (value === "1-2 times") scoreNormal++;
                if (value === "Never") scoreCombination++;
            } else if (i === 5) {
                if (value === "Every day") scoreDry++;
                if (value === "3-4 times") scoreOily++;
                if (value === "1-2 times") scoreNormal++;
                if (value === "Never") scoreCombination++;
            }
        }
    }
    
    let result = "";
    let UrlDirect = "";
    if (scoreDry >= scoreOily && scoreDry >= scoreNormal && scoreDry >= scoreCombination) {
        result = "Dry Skin";
        UrlDirect = "dry-skin.html";
    } else if (scoreOily >= scoreDry && scoreOily >= scoreNormal && scoreOily >= scoreCombination) {
        result = "Oily Skin";
        UrlDirect = "oily-skin.html";
    } else if (scoreNormal >= scoreDry && scoreNormal >= scoreOily && scoreNormal >= scoreCombination) {
        result = "Normal Skin";
        UrlDirect = "normal-skin.html";
    } else if (scoreCombination >= scoreDry && scoreCombination >= scoreOily && scoreCombination >= scoreNormal) {
        result = "Combination Skin";
        UrlDirect = "combination-skin.html";
    } else {
        result = "Unknown Skin Type";
    }

    document.getElementById("skinType").textContent = result;
    document.getElementById("result").style.display = "block";

    setTimeout(function() {
        window.location.href = UrlDirect;
    }, 3000);
}

