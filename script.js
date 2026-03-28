/**
 * PORTFOLIO - LINA MAOUCHE (ING3 Software Engineering)
 * Gestion : Multilingue (Persistence), Dark Mode (Persistence) et Animations au scroll.
 */

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
        'tech-EN':'IDEs',
        'tech-SE':'OS',
        'title-projects': 'Mes Projets',
        'collab': '(COLLABORATIF)',
        'ongoing': '(EN COURS)',
        'desc-pharma': 'Application de bureau pour la gestion de livraison pharmaceutique',
        'desc-cinely': 'Application de bureau pour la gestion de billets de cinéma',
        'desc-assirem': 'Application web pour un club de natation',
        'desc-crypt': 'Application de chiffrement et déchiffrement',
        'desc-compiler': "Développement d'un compilateur pour le langage C réalisé en Java.",
        'title-about': 'À propos de moi',
        'desc-about': "Passionnée par l’apprentissage depuis mon plus jeune âge, j’ai toujours été guidée par la curiosité et le désir de progresser. Cet état d’esprit m’a permis dexceller tout au long de mon parcours académique. J’apprécie le travail en équipe et je m’adapte facilement aux environnements collaboratifs, en valorisant la communication, le partage d’idées et la progression collective.",
        'title-lang': 'Langues',
        'title-hobbies': 'Loisirs',
        'hobby-photo': 'Photographie',
        'hobby-travel': 'Voyage',
        'hobby-read': 'Lecture',
        'hobby-pastry': 'Pâtisserie',
        'contact-title': 'Contactez-moi !',
        'view-report': 'Rapport',
        'view-code': 'Code',
        'skills-subtitle':'Stack technique et outils étudiés durant mon cycle ingénieur.',
        'projects-subtitle': 'Explorez le code source ou les rapports techniques.',
        'nav-demos': "Démonstrations",
        'view-demo':'Voir démonstrations',
        'copyright': '© 2026 Lina Maouche — Béjaïa, Algérie',
    },
    'en': {
        'nav-about': 'About',
        'nav-edu': 'Education',
        'nav-projects': 'Projects',
        'hero-title': "Hello! I'm Lina,",
        'hero-sub': "3rd Year Software Engineering Student at Bejaia University",
        'download-cv': "Download my CV",
        'title-edu': 'Education & Background',
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
        'tech-EN':'IDEs',
        'tech-SE':'OS',
        'title-projects': 'My Projects',
        'collab': '(COLLABORATIVE)',
        'ongoing': '(ONGOING)',
        'desc-pharma': 'Desktop application for pharmaceutical delivery management',
        'desc-cinely': 'Desktop application for movie ticket management',
        'desc-assirem': 'Web application for a swimming club',
        'desc-crypt': 'Encryption and decryption application',
        'desc-compiler': "Development of a C language compiler implemented in Java.",
        'title-about': 'About Me',
        'desc-about': "Passionate about learning from a young age, I have always been driven by curiosity and a strong desire to grow. This mindset has consistently led me to excel in my academic journey. I enjoy collaborating with others and naturally thrive in team environments, valuing communication and collective progress.",
        'title-lang': 'Languages',
        'title-hobbies': 'Hobbies',
        'hobby-photo': 'Photography',
        'hobby-travel': 'Travel',
        'hobby-read': 'Reading',
        'hobby-pastry': 'Baking',
        'contact-title': 'Get in touch!',
        'view-report': 'Report',
        'view-code': 'Code',
        'skills-subtitle':'Technical stack and tools studied during my engineering cycle.',
        'projects-subtitle':'Click icons to explore source code or technical reports',
        'nav-demos':"Demos",
        'view-demo':'View demos',
        'copyright': '© 2026 Lina Maouche — Bejaia, Algeria',
    }   
};

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initRevealAnimations();
    initEmailCopy();
});

// --- 1. GESTION DU THEME (DARK/LIGHT) ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.classList.toggle('fa-sun', isDark);
        themeToggle.classList.toggle('fa-moon', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// --- 2. GESTION DES LANGUES (FR/EN) ---
function initLanguage() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('language') || 'fr';

    // Appliquer la langue sauvegardée au chargement
    applyLanguage(savedLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id === 'btn-fr' ? 'fr' : 'en';
            applyLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function applyLanguage(lang) {
    
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

   
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            
            el.textContent = translations[lang][key];
        }
    });

    
    document.documentElement.style.scrollBehavior = 'auto';
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 10);
}

// --- 3. ANIMATIONS D'APPARITION (REVEAL) ---
function initRevealAnimations() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    });

    document.querySelectorAll('section, .project-card, .tech-card, .formation-grid').forEach((el) => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}

// COPIER EMAIL 
function initEmailCopy() {
    const copyBtn = document.getElementById('copy-email');
    const email = "maouchelina458@gmail.com";
    const status = document.getElementById('copy-status');

    copyBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
            if (status) {
                status.style.display = 'inline';
                setTimeout(() => { status.style.display = 'none'; }, 1500);
            }
        });
    });
}