export const COUNTRIES = [
    { value: 'england', label: 'Inglaterra' },
    { value: 'spain', label: 'España' },
    { value: 'france', label: 'Francia' },
    { value: 'italy', label: 'Italia' },
    { value: 'usa', label: 'Estados Unvalueos' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'germany', label: 'Alemania' },
    { value: 'japan', label: 'Japón' },
    { value: 'canada', label: 'Canadá' },
    { value: 'australia', label: 'Australia' },
    { value: 'brazil', label: 'Brasil' },
    { value: 'russia', label: 'Rusia' },
    { value: 'mexico', label: 'México' },
    { value: 'south_korea', label: 'Corea del Sur' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'turvalue', label: 'Turquía' },
    { value: 'netherlands', label: 'Países Bajos' },
    { value: 'saudi_arabia', label: 'Arabia Saudita' },
    { value: 'switzerland', label: 'Suiza' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'south_africa', label: 'Sudáfrica' },
    { value: 'egypt', label: 'Egipto' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'pakistan', label: 'Pakistán' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'iran', label: 'Irán' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'philippines', label: 'Filipinas' },
    { value: 'colombia', label: 'Colombia' }
];

export const LANGUAGES = [
    { value: 'english', label: 'Inglés' },
    { value: 'spanish', label: 'Español' },
    { value: 'french', label: 'Francés' },
    { value: 'italian', label: 'Italiano' },
    { value: 'chinese', label: 'Chino' },
    { value: 'arabic', label: 'Árabe' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'bengali', label: 'Bengalí' },
    { value: 'portuguese', label: 'Portugués' },
    { value: 'russian', label: 'Ruso' },
    { value: 'japanese', label: 'Japonés' },
    { value: 'german', label: 'Alemán' },
    { value: 'korean', label: 'Coreano' },
    { value: 'farsi', label: 'Persa' },
    { value: 'turkish', label: 'Turco' },
    { value: 'urdu', label: 'Urdu' },
    { value: 'swahili', label: 'Suajili' },
    { value: 'dutch', label: 'Holandés' },
    { value: 'polish', label: 'Polaco' },
    { value: 'vietnamese', label: 'Vietnamita' },
    { value: 'thai', label: 'Tailandés' },
    { value: 'greek', label: 'Griego' },
    { value: 'czech', label: 'Checo' },
    { value: 'swedish', label: 'Sueco' },
    { value: 'finnish', label: 'Finlandés' },
    { value: 'danish', label: 'Danés' },
    { value: 'norwegian', label: 'Noruego' },
    { value: 'hungarian', label: 'Húngaro' },
    { value: 'tagalog', label: 'Tagalo' },
    { value: 'malay', label: 'Malayo' },
];

export const SPECIFY_FEATURES = {
    'finance': [
        {
            value: 'ticketing',
            label: 'Ticketing'
        },
        {
            value: 'accounting',
            label: 'Contabilvaluead'
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
            label: 'Otros'
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
            label: 'Otros'
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
            label: 'Otros'
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
            label: 'Otros'
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
            label: 'Otros'
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
            label: 'Otros'
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
            label: 'Otros'
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


