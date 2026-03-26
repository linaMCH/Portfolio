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
        'view-cert': "Voir l'attestation"
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
        'view-cert': "View Certificate"
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