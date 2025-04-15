export const COUNTRIES = [
    { value: 'spain', label: 'España' },
    { value: 'germany', label: 'Alemania' },
    { value: 'saudi_arabia', label: 'Arabia Saudita' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'australia', label: 'Australia' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'brazil', label: 'Brasil' },
    { value: 'canada', label: 'Canadá' },
    { value: 'china', label: 'China' },
    { value: 'colombia', label: 'Colombia' },
    { value: 'south_korea', label: 'Corea del Sur' },
    { value: 'egypt', label: 'Egipto' },
    { value: 'united_states', label: 'Estados Unidos' },
    { value: 'philippines', label: 'Filipinas' },
    { value: 'france', label: 'Francia' },
    { value: 'england', label: 'Inglaterra' },
    { value: 'india', label: 'India' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'iran', label: 'Irán' },
    { value: 'italy', label: 'Italia' },
    { value: 'japan', label: 'Japón' },
    { value: 'mexico', label: 'México' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'netherlands', label: 'Países Bajos' },
    { value: 'pakistan', label: 'Pakistán' },
    { value: 'russia', label: 'Rusia' },
    { value: 'south_africa', label: 'Sudáfrica' },
    { value: 'switzerland', label: 'Suiza' },
    { value: 'turkey', label: 'Turquía' },
    { value: 'vietnam', label: 'Vietnam' }
];


export const LANGUAGES = [
    { value: 'spanish', label: 'Español' },
    { value: 'english', label: 'Inglés' },
    { value: 'german', label: 'Alemán' },
    { value: 'arabic', label: 'Árabe' },
    { value: 'bengali', label: 'Bengalí' },
    { value: 'czech', label: 'Checo' },
    { value: 'chinese', label: 'Chino' },
    { value: 'danish', label: 'Danés' },
    { value: 'slovak', label: 'Eslovaco' },
    { value: 'finnish', label: 'Finlandés' },
    { value: 'french', label: 'Francés' },
    { value: 'greek', label: 'Griego' },
    { value: 'hungarian', label: 'Húngaro' },
    { value: 'italian', label: 'Italiano' },
    { value: 'japanese', label: 'Japonés' },
    { value: 'korean', label: 'Coreano' },
    { value: 'malay', label: 'Malayo' },
    { value: 'norwegian', label: 'Noruego' },
    { value: 'dutch', label: 'Holandés' },
    { value: 'polish', label: 'Polaco' },
    { value: 'portuguese', label: 'Portugués' },
    { value: 'farsi', label: 'Persa' },
    { value: 'russian', label: 'Ruso' },
    { value: 'swedish', label: 'Sueco' },
    { value: 'swahili', label: 'Suajili' },
    { value: 'tagalog', label: 'Tagalo' },
    { value: 'thai', label: 'Tailandés' },
    { value: 'turkish', label: 'Turco' },
    { value: 'urdu', label: 'Urdu' },
    { value: 'vietnamese', label: 'Vietnamita' }
];

export const SPECIFY_FEATURES = {
    'finance': [
        {
            value: 'ticketing',
            label: 'Ticketing'
        },
        {
            value: 'accounting',
            label: 'Contabilidad'
        },
        {
            value: 'payment',
            label: 'Facturación'
        },
        {
            value: 'ticketing',
            label: 'Tesorería'
        },
        {
            value: 'other',
            label: 'Otros (Finanzas)'
        }
    ],
    'sellmarketing': [
        {
            value: 'crm',
            label: 'CRM'
        },
        {
            value: 'marketingrelational',
            label: 'Marketing relacional'
        },
        {
            value: 'marketingdigital',
            label: 'Marketing digital'
        },
        {
            value: 'other',
            label: 'Otros (Ventas y Marketing)'
        }
    ],
    'rrhh': [
        {
            value: 'time',
            label: 'Control horario'
        },
        {
            value: 'salary',
            label: 'Nóminas'
        },
        {
            value: 'personalmanagement',
            label: 'Gestión de personal'
        },
        {
            value: 'selection',
            label: 'Selección'
        },
        {
            value: 'training',
            label: 'Formación'
        },
        {
            value: 'performance',
            label: 'Desempeño'
        },
        {
            value: 'other',
            label: 'Otros (RRHH)'
        }
    ],
    'logistics': [
        {
            value: 'warehouse',
            label: 'Almacen'
        },
        {
            value: 'transport',
            label: 'Flotas'
        },
        {
            value: 'shopping',
            label: 'Compras'
        },
        {
            value: 'manufactoring',
            label: 'Manufactoring'
        },
        {
            value: 'other',
            label: 'Otros (Logística)'
        }
    ],
    'it': [
        {
            value: 'bbdd',
            label: 'BBDD'
        },
        {
            value: 'programminglanguages',
            label: 'Lenguajes de programación'
        },
        {
            value: 'webSolutions',
            label: 'Soluciones para tu web'
        },
        {
            value: 'appSolutions',
            label: 'Soluciones app'
        },
        {
            value: 'helpDesk',
            label: 'Helpdesk'
        },
        {
            value: 'cloud',
            label: 'Servidores cloud'
        },
        {
            value: 'other',
            label: 'Otros (IT)'
        },
    ],
    'data': [
        {
            value: 'descriptiveAnalysis',
            label: 'Análisis descriptivo'
        },
        {
            value: 'rrss',
            label: 'RRSS'
        },
        {
            value: 'dataVisualization',
            label: 'Visualizacion de datos'
        },
        {
            value: 'clientSegmentation',
            label: 'Segmentacion de clientes'
        },
        {
            value: 'other',
            label: 'Otros (Data)'
        }
    ],
    'law': [
        {
            value: 'electronicSignature',
            label: 'Firma electrónica'
        },
        {
            value: 'gdpr',
            label: 'GDPR'
        },
        {
            value: 'grc',
            label: 'GRC'
        },
        {
            value: 'riskManagement',
            label: 'Risk management'
        }
    ],
    'transversal': [
        {
            value: 'virtualSwitchboard',
            label: 'Centralita virtual'
        },
        {
            value: 'documentManager',
            label: 'Gestor documental'
        },
        {
            value: 'productivity',
            label: 'Productividad'
        },
        {
            value: 'other',
            label: 'Seguridad'
        },
        {
            value: 'projectManagement',
            label: 'Gestión de proyectos'
        },
        {
            value: 'officeSuites',
            label: 'Suites ofimáticas'
        },
        {
            value: 'communicationAndDesign',
            label: 'Diseño & comunicación'
        },
        {
            value: 'ia',
            label: 'IA'
        },
        {
            value: 'other',
            label: 'Otros (Transversal)'
        },
    ],
}

export const SPECIFY_FEATURES_LABELS = {
    ticketing: 'Ticketing',
    accounting: 'Contabilidad',
    payment: 'Facturación',
    tesoreria: 'Tesorería',
    other: 'Otros',
    crm: 'CRM',
    marketingrelational: 'Marketing relacional',
    marketingdigital: 'Marketing digital',
    time: 'Control horario',
    salary: 'Nóminas',
    personalmanagement: 'Gestión de personal',
    selection: 'Selección',
    training: 'Formación',
    performance: 'Desempeño',
    warehouse: 'Almacen',
    transport: 'Flotas',
    shopping: 'Compras',
    manufactoring: 'Manufactoring',
    bbdd: 'BBDD',
    programminglanguages: 'Lenguajes de programación',
    webSolutions: 'Soluciones para tu web',
    appSolutions: 'Soluciones app',
    helpDesk: 'Helpdesk',
    cloud: 'Servidores cloud',
    descriptiveAnalysis: 'Análisis descriptivo',
    rrss: 'RRSS',
    dataVisualization: 'Visualizacion de datos',
    clientSegmentation: 'Segmentacion de clientes',
    electronicSignature: 'Firma electrónica',
    gdpr: 'GDPR',
    grc: 'GRC',
    riskManagement: 'Risk management',
    virtualSwitchboard: 'Centralita virtual',
    documentManager: 'Gestor documental',
    productivity: 'Productividad',
    projectManagement: 'Gestión de proyectos',
    officeSuites: 'Suites ofimáticas',
    communicationAndDesign: 'Diseño & comunicación',
    ia: 'IA'
}

export const POSITIONS = [
    { value: 'ceo', label: 'CEO' },
    { value: 'front_end', label: 'Front End Developer' },
    { value: 'back_end', label: 'Back End Developer' },
    { value: 'full_stack', label: 'Full Stack Developer' },
    { value: 'ui_ux', label: 'UI/UX Designer' },
    { value: 'data_scientist', label: 'Data Scientist' },
    { value: 'data_analyst', label: 'Data Analyst' },
    { value: 'devops', label: 'DevOps Engineer' },
    { value: 'cloud_architect', label: 'Cloud Architect' },
    { value: 'product_manager', label: 'Product Manager' },
    { value: 'project_manager', label: 'Project Manager' },
    { value: 'qa_engineer', label: 'QA Engineer' },
    { value: 'cybersecurity', label: 'Cybersecurity Specialist' },
    { value: 'blockchain_developer', label: 'Blockchain Developer' },
    { value: 'game_developer', label: 'Game Developer' },
    { value: 'machine_learning', label: 'Machine Learning Engineer' },
    { value: 'ai_specialist', label: 'AI Specialist' },
    { value: 'business_analyst', label: 'Business Analyst' },
    { value: 'digital_marketing', label: 'Digital Marketing Specialist' },
    { value: 'seo_specialist', label: 'SEO Specialist' },
    { value: 'social_media_manager', label: 'Social Media Manager' },
    { value: 'content_creator', label: 'Content Creator' },
    { value: 'technical_writer', label: 'Technical Writer' },
    { value: 'mobile_app_developer', label: 'Mobile App Developer' },
    { value: 'web_developer', label: 'Web Developer' },
    { value: 'software_engineer', label: 'Software Engineer' },
    { value: 'system_admin', label: 'System Administrator' },
    { value: 'it_consultant', label: 'IT Consultant' },
    { value: 'game_designer', label: 'Game Designer' },
    { value: 'product_designer', label: 'Product Designer' },
    { value: 'scrum_master', label: 'Scrum Master' },
    { value: 'vr_developer', label: 'VR Developer' },
    { value: 'ar_developer', label: 'AR Developer' },
    { value: 'site_reliability_engineer', label: 'Site Reliability Engineer' },
    { value: 'it_support', label: 'IT Support Specialist' },
    { value: 'data_engineer', label: 'Data Engineer' },
    { value: 'ecommerce_manager', label: 'E-commerce Manager' },
    { value: 'growth_hacker', label: 'Growth Hacker' },
    { value: 'crm_manager', label: 'CRM Manager' }
];



