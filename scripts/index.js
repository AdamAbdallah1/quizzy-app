const quizzes = [
    {
        category: "HTML/CSS",
        description: "Basics of web structure and styling.",
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
                answer: "Hyper Text Markup Language",
                points: 10
            },
            {
                question: "Which HTML tag is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>"],
                answer: "<a>",
                points: 10
            },
            {
                question: "Which CSS property is used to change text color?",
                options: ["text-color", "font-color", "color"],
                answer: "color",
                points: 10
            }
        ]
    },
    {
        category: "JavaScript",
        description: "Fundamentals of JavaScript programming.",
        questions: [
            {
                question: "Which symbol is used for comments in JavaScript?",
                options: ["//", "<!-- -->", "#"],
                answer: "//",
                points: 10
            },
            {
                question: "What type is `null` in JavaScript?",
                options: ["object", "undefined", "null"],
                answer: "object",
                points: 10
            },
            {
                question: "Which keyword declares a block-scoped variable?",
                options: ["var", "const", "global"],
                answer: "const",
                points: 10
            }
        ]
    },
    {
        category: "SQL",
        description: "Beginner SQL and database basics.",
        questions: [
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Strong Question Language", "Simple Query List"],
                answer: "Structured Query Language",
                points: 10
            },
            {
                question: "Which SQL statement is used to retrieve data?",
                options: ["SELECT", "GET", "PULL"],
                answer: "SELECT",
                points: 10
            },
            {
                question: "Which clause is used to filter results?",
                options: ["WHERE", "FROM", "HAVING"],
                answer: "WHERE",
                points: 10
            }
        ]
    },
    {
        category: "PHP",
        description: "Intro to PHP for dynamic web apps.",
        questions: [
            {
                question: "What does PHP stand for?",
                options: ["Private Home Page", "PHP: Hypertext Preprocessor", "Personal Hypertext Processor"],
                answer: "PHP: Hypertext Preprocessor",
                points: 10
            },
            {
                question: "Which symbol starts a PHP variable?",
                options: ["@", "$", "#"],
                answer: "$",
                points: 10
            },
            {
                question: "Which function is used to output text in PHP?",
                options: ["echo()", "print()", "say()"],
                answer: "echo()",
                points: 10
            }
        ]
    }
];

localStorage.setItem("quizzyQuizzes", JSON.stringify(quizzes));
