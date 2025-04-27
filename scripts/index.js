document.addEventListener("DOMContentLoaded", () => {
    initializeQuizzes();

    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));

    if (!quizzes || quizzes.length === 0) {
        console.log("No quizzes found in localStorage.");
        return;
    }

    const quizContainer = document.getElementById("quiz-container");

    quizzes.forEach(quiz => {
        const quizElement = document.createElement("div");
        quizElement.classList.add("quiz-item");

        const quizTitle = document.createElement("h3");
        quizTitle.textContent = quiz.category;
        quizElement.appendChild(quizTitle);

        const quizDescription = document.createElement("p");
        quizDescription.textContent = quiz.description;
        quizElement.appendChild(quizDescription);

        const viewButton = document.createElement("button");
        viewButton.textContent = "Start Quiz";
        viewButton.addEventListener("click", () => startQuiz(quiz.category));
        quizElement.appendChild(viewButton);

        quizContainer.appendChild(quizElement);
    });

    function startQuiz(category) {
        localStorage.setItem("selectedQuizCategory", category);
        window.location.href = "quiz.html"; 
    }

    function initializeQuizzes() {
        if (localStorage.getItem("quizzyQuizzes")) return; 

        const quizzes = [
            {
                category: "HTML/CSS",
                description: "Basics of web structure and styling.",
                questions: [
                    { question: "What does HTML stand for?", options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language", points: 5 },
                    { question: "Which HTML tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>"], answer: "<a>", points: 5 },
                    { question: "Which CSS property is used to change text color?", options: ["text-color", "font-color", "color"], answer: "color", points: 5 }
                ]
            },
            {
                category: "JavaScript",
                description: "Fundamentals of JavaScript programming.",
                questions: [
                    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "<!-- -->", "#"], answer: "//", points: 5 },
                    { question: "What type is `null` in JavaScript?", options: ["object", "undefined", "null"], answer: "object", points: 5 },
                    { question: "Which keyword declares a block-scoped variable?", options: ["var", "const", "global"], answer: "const", points: 5 }
                ]
            },
            {
                category: "SQL",
                description: "Beginner SQL and database basics.",
                questions: [
                    { question: "What does SQL stand for?", options: ["Structured Query Language", "Strong Question Language", "Simple Query List"], answer: "Structured Query Language", points: 5 },
                    { question: "Which SQL statement is used to retrieve data?", options: ["SELECT", "GET", "PULL"], answer: "SELECT", points: 5 },
                    { question: "Which clause is used to filter results?", options: ["WHERE", "FROM", "HAVING"], answer: "WHERE", points: 5 }
                ]
            }
        ];

        localStorage.setItem("quizzyQuizzes", JSON.stringify(quizzes));
    }
});
