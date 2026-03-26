const translations = {
    'fr': {
        'nav-about': 'À propos',
        'nav-edu': 'Formation',
        'nav-projects': 'Projets',
        'hero-title': "Bonjour! je suis Lina,",
        'hero-sub': "Étudiante en 3ème année Génie Logiciel à l'Université de Béjaïa",
        'download-cv': "Télécharger mon CV",
        'title-edu': 'Formation',
        'edu-ing': "Cycle d'Ingénieur — Génie Logiciel",
        'edu-fac': "Université de Béjaïa (En cours)",
        'edu-bac': "Baccalauréat Mathématiques",
        'edu-lycee': "Mention Très Bien — Lycée Les Iris (2023/2024)",
        'edu-AS':"Lycée / college / primaire Privé", 
        'edu-etudes':"Parcours scolaire privé aux IRIS",
        'cert-algo1':"Algorithmique 1",
        'cert-algo2': "Algorithmique & Structures de données",
        'cert-pyth':"Jeu en Python",
        'cert-eng': "Anglais — Syken College",
        'view-cert': "Voir l'attestation",
        'title-tech': 'Technologies',
        'tech-prog': 'Programmation',
        'tech-front': 'Frontend & Design',
        'tech-tools': 'Outils & BD',
        'title-projects': 'Mes Projets',
        'collab': '(COLLABORATIF)',
        'ongoing': '(EN COURS)',
        'desc-pharma': 'Application de bureau pour la gestion de livraison pharmaceutique',
        'desc-cinely': 'Application de bureau pour la gestion de billets de cinéma',
        'desc-assirem': 'Application web pour un club de natation',
        'desc-crypt': 'Application de chiffrement et déchiffrement',
        'desc-compiler': "Développement d'un compilateur pour le langage C réalisé en Java.",
        'title-about': 'À propos de moi',
        'desc-about': "Passionnée par l’apprentissage depuis mon plus jeune âge, j’ai toujours été guidée par la curiosité et le désir de progresser. Cet état d’esprit m’a permis dexceller tout au long de mon parcours académique. J’apprécie le travail en équipe et je m’adapte facilement aux environnements collaboratifs, en valorisant la communication, le partage d’idées et la progression collective. Consciente que mon parcours en ingénierie logicielle ne fait que commencer, je reste motivée, prête à apprendre continuellement et enthousiaste face aux défis et opportunités à venir.",
        
        'title-lang': 'Langues',
        'title-hobbies': 'Loisirs',
        'hobby-photo': 'Photographie',
        'hobby-travel': 'Voyage',
        'hobby-read': 'Lecture',
        'hobby-pastry': 'Pâtisserie',
        'contact-title': 'Contactez-moi !',
    },
    'en': {
        'nav-about': 'About',
        'nav-edu': 'Education',
        'nav-projects': 'Projects',
        'hero-title': "Hello! I'm Lina,",
        'hero-sub': "3rd Year Software Engineering Student at Bejaia University",
        'download-cv': "Download my CV",
        'title-edu': 'Education',
        'edu-ing': "Engineering Degree — Software Engineering",
        'edu-fac': "University of Bejaia (Ongoing)",
        'edu-bac': "Mathematics Baccalaureate",
        'edu-lycee': "With Honors — Les Iris High School (2023/2024)",
        'edu-AS':"Private High / Middle / Primary Education",
        'edu-etudes':"Private Education at LES IRIS",
        'cert-algo1':"Algorithmique 1",
        'cert-algo2': "Algorithms & Dynamic Data Structures",
        'cert-pyth':"Game in Python",
        'cert-eng': "English Certification — Syken College",
        'view-cert': "View Certificate",
        'title-tech': 'Technologies',
        'tech-prog': 'Programming',
        'tech-front': 'Frontend & Design',
        'tech-tools': 'Tools & DB',
        'title-projects': 'My Projects',
        'collab': '(COLLABORATIVE)',
        'ongoing': '(ONGOING)',
        'desc-pharma': 'Desktop application for pharmaceutical delivery management',
        'desc-cinely': 'Desktop application for movie ticket management',
        'desc-assirem': 'Web application for a swimming club',
        'desc-crypt': 'Encryption and decryption application',
        'desc-compiler': "Development of a C language compiler implemented in Java.",
        'title-about': 'About Me',
        'desc-about': "Passionate about learning from a young age, I have always been driven by curiosity and a strong desire to grow. This mindset has consistently led me to excel in my academic journey. I enjoy collaborating with others and naturally thrive in team environments, valuing communication, shared ideas, and collective progress. I am aware that my journey in software engineering is just beginning, with much more to learn and explore. I am motivated, eager to improve continuously, and excited about the opportunities and challenges ahead.",
       
        'title-lang': 'Languages',
        'title-hobbies': 'Hobbies',
        'hobby-photo': 'Photography',
        'hobby-travel': 'Travel',
        'hobby-read': 'Reading',
        'hobby-pastry': 'Baking',
        'contact-title': 'Get in touch!',
    }   
};

// Gestion des Langues
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.lang-btn.active').classList.remove('active');
        btn.classList.add('active');

        const lang = btn.id === 'btn-fr' ? 'fr' : 'en';

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) el.innerText = translations[lang][key];
        });
    });
});

// Gestion du Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    }
});