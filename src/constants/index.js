const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    //     {
//         id: 1,
//         date: "Sep 2, 2025",
//         title:
//             "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
//         image: "/images/blog1.png",
//         link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
//     },
//     {
//         id: 2,
//         date: "Aug 28, 2025",
//         title: "The Ultimate Guide to Mastering Three.js for 3D Development",
//         image: "/images/blog2.png",
//         link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
//     },
//     {
//         id: 3,
//         date: "Aug 15, 2025",
//         title: "The Ultimate Guide to Mastering GSAP Animations",
//         image: "/images/blog3.png",
//         link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
//     },

    {
        id: 1,
        date: "",
        title: "Thesis are upcoming",
        image: "/images/thesis.jpg",
        link: "",
    },
];

const techStack = [
    {
        category: "Languages",
        items: ["JavaScript", "Python", "Java"],
    },
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "React"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS Grid", "Flexbox"],
    },
    {
        category: "Database",
        items: ["MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "VS Code", "Vite"],
    },
    {
        category: "Learning",
        items: ["React Hooks", "REST APIs", "Web Dev"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/JavaScript-Mastery-Pro",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/jsmasterypro",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1 — ChronoLogic
        {
            id: 5,
            name: "ChronoLogic",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "ChronoLogic Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "ChronoLogic is an AI-powered productivity and task scheduling system that combines Generative AI, mathematical optimization, and neuro-symbolic computing.",
                        "It analyzes tasks to estimate cognitive workload, procrastination risk, complexity, and urgency before dynamically optimizing the user's task execution order.",
                        "The system combines a neuro layer powered by Google Gemini with a symbolic optimization layer for constraint-aware scheduling and behavioral prioritization.",
                        "It is built with Python, PyQt6, Django REST Framework, MongoDB/MongoEngine, Google Gemini API, JWT authentication, QThread, and Matplotlib.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com/ChronoLogic",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/ChronoLogic-Team/ChronoLogic",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "chronologic.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/images.jpg",
                },
                {
                    id: 5,
                    name: "GitHub.url",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/ChronoLogic-Team/ChronoLogic",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2 — AgroVision
        {
            id: 6,
            name: "AgroVision",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AgroVision Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AgroVision is an AI-powered plant disease detection and crop advisory system designed to identify diseases from crop leaf images.",
                        "It uses computer vision and deep learning to classify plant diseases and provide treatment recommendations and agricultural guidance.",
                        "The project uses MobileNetV2 transfer learning trained on the PlantVillage dataset, with image preprocessing and augmentation to improve model generalization.",
                        "It is built with Python, TensorFlow, Keras, MobileNetV2, OpenCV, NumPy, Scikit-learn, Matplotlib, and Streamlit.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com/AgroVision",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/WaliurR029/AgroVision",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "agrovision.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/images2.jpg",
                },
                {
                    id: 5,
                    name: "GitHub.url",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/WaliurR029/AgroVision",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3 — TODO App
        {
            id: 7,
            name: "TODO App with Swing",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "TODO App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A simple desktop To-Do List application built with Java Swing for managing everyday tasks.",
                        "The application allows users to add tasks, mark tasks as completed, and delete tasks when they are no longer needed.",
                        "It provides a straightforward graphical interface focused on simple and efficient task management.",
                        "The project demonstrates Java Swing GUI development and fundamental desktop application design.",
                    ],
                },
                {
                    id: 2,
                    name: "GitHub",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/WaliurR029/TODO-app-with-Swing",
                    position: "top-10 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/adrian.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/adrian.jpg",
            description: [
                "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
