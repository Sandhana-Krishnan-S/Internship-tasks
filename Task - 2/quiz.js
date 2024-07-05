document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
            answer: 1
        },
        {
            question: "Which language is used for styling web pages?",
            options: ["HTML", "JQuery", "CSS", "XML"],
            answer: 3
        },
        {
            question: "Which is not a JavaScript Framework?",
            options: ["Python Script", "JQuery", "Django", "NodeJS"],
            answer: 3
        },
        {
            question: "Which is used for Connect To Database?",
            options: ["PHP", "HTML", "JS", "All"],
            answer: 1
        },
        {
            question: "Guess the output:\n\nconsole.log(typeof null);",
            options: ["object", "null", "undefined", "string"],
            answer: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const resultElement = document.getElementById('result');

    function loadQuestion(index) {
        const question = questions[index];
        questionElement.innerText = question.question;
        optionButtons.forEach((button, i) => {
            button.innerText = question.options[i];
            button.dataset.value = i + 1;
            button.style.backgroundColor = '#f1f1f1';
        });
    }

    function showResult() {
        resultElement.innerText = `You scored ${score} out of ${questions.length}`;
    }

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedAnswer = parseInt(button.dataset.value);
            if (selectedAnswer === questions[currentQuestionIndex].answer) {
                score++;
            }
            optionButtons.forEach(btn => {
                btn.style.backgroundColor = btn === button ? '#ccc' : '#ddd';
            });
        });
    });

    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
            resultElement.innerText = '';
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            resultElement.innerText = '';
        } else {
            showResult();
        }
    });

    loadQuestion(currentQuestionIndex);
});
