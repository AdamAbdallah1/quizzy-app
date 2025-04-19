const htmlCssQuiz = {
    category: "HTML/CSS",
    description: "Basics of web structure and styling.",
    questions: [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
        points: 10
    },
    {
        question: "Which tag is used for inserting an image?",
        options: ["<img>", "<image>", "<src>"],
        correctAnswer: "<img>",
        points: 10
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size"],
        correctAnswer: "font-size",
        points: 10
    }
    ]
};
  
const jsQuiz = {
    category: "JavaScript",
    description: "Fundamentals of JavaScript programming.",
    questions: [
    {
        question: "Which keyword declares a variable?",
        options: ["var", "int", "string"],
        correctAnswer: "var",
        points: 10
    },
    {
        question: "Which symbol is used for comments in JS?",
        options: ["//", "/* */", "#"],
        correctAnswer: "//",
        points: 10
    },
    {
        question: "What will 'typeof null' return?",
        options: ["null", "object", "undefined"],
        correctAnswer: "object",
        points: 10
    }
]
};
  
  const sqlQuiz = {
    category: "SQL",
    description: "Beginner SQL and database basics.",
    questions: [
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Stylish Question Language", "Strong Question Logic"],
        correctAnswer: "Structured Query Language",
        points: 10
    },
    {
        question: "Which keyword is used to fetch data?",
        options: ["GET", "FETCH", "SELECT"],
        correctAnswer: "SELECT",
        points: 10
    },
    {
        question: "Which symbol ends a SQL statement?",
        options: [".", ";", ":"],
        correctAnswer: ";",
        points: 10
    }
]
};
  
  const phpQuiz = {
    category: "PHP",
    description: "Intro to PHP for dynamic web apps.",
    questions: [
    {
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Preprocessor Hypertext", "PHP: Hypertext Preprocessor"],
        correctAnswer: "PHP: Hypertext Preprocessor",
        points: 10
    },
    {
        question: "Which symbol is used to declare a variable?",
        options: ["$", "@", "#"],
        correctAnswer: "$",
        points: 10
    },
    {
        question: "Which tag is used to write PHP code?",
        options: ["<php>", "<?php ?>", "<script>"],
        correctAnswer: "<?php ?>",
        points: 10
    }
]
};
  

localStorage.setItem("quizzyQuizHTML", JSON.stringify(htmlCssQuiz));
localStorage.setItem("quizzyQuizJS", JSON.stringify(jsQuiz));
localStorage.setItem("quizzyQuizSQL", JSON.stringify(sqlQuiz));
localStorage.setItem("quizzyQuizPHP", JSON.stringify(phpQuiz));

