import { useState, useEffect } from "react";
import { searchTalents, createSearch } from "../services/freelance";

export function useTalentSearch() {
  const [searchParams, setSearchParams] = useState({});
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Efecto para buscar talentos cuando cambien los parámetros de búsqueda
  useEffect(() => {
    const fetchTalents = async () => {
      // Solo ejecutar búsqueda si hay parámetros
      if (Object.keys(searchParams).length > 0) {
        setIsLoading(true);
        try {
          const response = await searchTalents(searchParams);
          setTalents(response.data);
          setError(null);
        } catch (err) {
          setError(err);
          setTalents([]);
        } finally {
          setIsLoading(false);
        }
      }
    };

    setTalents([
      {
        "_id": "67606cfa024d6163b515b3af",
        "fullName": "Marcos Fernandez Blasco",
        "city": "Valencia",
        "job": "full_stack",
        "email": "marcosparkour11@gmail.com",
        "introducction": "My name is Marcos, I consider myself a curious and creative boy. I think that if I had to choose my most characteristic quality it would be that when I discover something that I like, I never tire of learning about it.",
        "studies": [
          {
            "name": "Doble Grado en Ingenieria Informatica + ADE",
            "entity": "Universidad Politecnica de Valencia",
            "start": 2015,
            "end": 2021,
            "description": "Doble grado ",
            "_id": "6762a918801e45e9325bae9e"
          },
          {
            "name": "Bootcamp de Full stack",
            "entity": "Ironhack",
            "start": 2019,
            "end": 2020,
            "description": "Front-end: HTML, CSS, JavaScript, React, Bootstrap, Responsive Design.\nBack-end: MongoDB, Node.js, HandleBars, Mongoose.",
            "_id": "6762a918801e45e9325bae9f"
          }
        ],
        "technologies": [
          {
            "name": "React js",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea0"
          },
          {
            "name": "Vue js",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea1"
          },
          {
            "name": "Node js",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea2"
          },
          {
            "name": "Git",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea3"
          },
          {
            "name": "Javascript",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea4"
          },
          {
            "name": "Mongoose",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea5"
          },
          {
            "name": "SQL",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6762a918801e45e9325baea6"
          }
        ],
        "aboutMe": "My name is Marcos, I consider myself a curious and creative boy. I think that if I had to choose my most characteristic quality it would be that when I discover something that I like, I never tire of learning about it.\n\nI did a double degree in Computer Engineering and Business Administration, which allowed me to develop different ways of thinking, both for the practice of engineering and for the development and theoretical study of economics and business.\n\n\nAfter that, I discovered my passion about the web development industry, and I studied everything I could about it. I did the web development bootcamp in Ironhack Madrid , which allowed me to improve my knowledge and the most important technologies on the current market, such as JavaScript, HTML, CSS, MongoDB, React, Angular or NodeJS, among others.\n\nI would like to be part of projects to demonstrate what I have learned, and continue to grow within this industry. I would like to be part of some projects where MEAN or MERN stacks are used, because I consider that are my specialty.\n\nTechnologies: \nFront end: React, Next.js, Angular, HTML, CSS, SASS, Responsive design, Boostrap, Material UI, Next.js MERN, MEAN\nBack end: Node, Node.js, MongoDB, SQL, MySQL, Mongoose, API rest, Git",
        "web": "https://www.linkedin.com/in/marcos-fernandez-blasco/",
        "telephone": "677785519",
        "skills": [],
        "languages": [
          {
            "name": "Español",
            "level": "native"
          },
          {
            "name": "Ingles",
            "level": "advanced"
          },
          {
            "name": "Italiano",
            "level": "advanced"
          }
        ],
        "prefferedWork": [
          "hybrid"
        ],
        "openPrefferedWork": true,
        "salary": 50000,
        "openSalary": false,
        "user": {
          "_id": "66144539d6dd8f123c1471e4",
          "email": "marcos@marcos.es",
          "name": "Marcos Fernandez",
          "password": "$2b$10$32LRpMOyxTvd.sJNPMvdLu.M8AyqEcP9SRCMMEblr4SfhIpkrT0gO",
          "avatar": "http://res.cloudinary.com/df82flqqr/image/upload/v1734518821/04efed02b55b97588cbdadef9ce8e9a6_profile.png",
          "createdAt": "2024-04-08T19:27:53.226Z",
          "updatedAt": "2024-12-18T10:47:04.622Z",
          "__v": 0,
          "verified": false
        },
        "experience": [
          {
            "name": "Front end developer",
            "entity": "Sesame",
            "start": 2022,
            "end": null,
            "description": "Build new components and functionalities for Sesame Software (B2B)\nI’m part of as squad with different roles of Development. Communicate and coordinate with backends and qa’s to develop new features in the dashboard of Sesame app.",
            "country": "España",
            "isRemote": false,
            "_id": "6762a918801e45e9325baea7"
          },
          {
            "name": "Full stack developer",
            "entity": "Emocional",
            "start": 2021,
            "end": 2022,
            "description": "Developing a B2B software (SASS) that tracks the emotional state of employees in companies based on IA and deep learning in videocalls.\nCreation of the main web dashboard front-end with React and a few libraries using Typescript. Furthermor",
            "country": "España",
            "isRemote": true,
            "_id": "6762a918801e45e9325baea8"
          }
        ],
        "gallery": [
          "http://res.cloudinary.com/df82flqqr/image/upload/v1734521122/edbc39709a61bd21c8a54f0751c66f84_profile.png",
          "http://res.cloudinary.com/df82flqqr/image/upload/v1734521125/f4440565f4bf931e301e856ad535ec73_profile.png"
        ],
        "createdAt": "2024-12-16T18:10:02.349Z",
        "updatedAt": "2024-12-18T11:49:34.659Z",
        "__v": 0,
        "country": "spain"
      },
      {
        "_id": "6761baceefa0a5da4a1a7411",
        "fullName": "Iván Bernabé Padilla",
        "city": "Valencia",
        "job": "project_manager",
        "email": "ivan@digitalando.org",
        "introducction": "Sociologist, team coach and change agent for digitalization. Great initiative, interpersonal skills and a great desire to learn, improve and create. Very aware of solidarity projects and volunteer in various humanitarian aid and education groups.",
        "studies": [
          {
            "name": "Sociologist",
            "entity": "University of Valencia",
            "start": 2017,
            "end": 2021,
            "description": "",
            "_id": "6761baceefa0a5da4a1a7412"
          },
          {
            "name": "MBA & HR Máster",
            "entity": "ISEB",
            "start": 2021,
            "end": 2022,
            "description": "",
            "_id": "6761baceefa0a5da4a1a7413"
          },
          {
            "name": "Agent of digitalization",
            "entity": "University of Alicante",
            "start": 2023,
            "end": 2024,
            "description": "",
            "_id": "6761baceefa0a5da4a1a7414"
          }
        ],
        "technologies": [
          {
            "name": "Salesforce",
            "personal": false,
            "profesional": true,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a7415"
          },
          {
            "name": "Zoho One",
            "personal": false,
            "profesional": true,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a7416"
          },
          {
            "name": "Hubspot",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a7417"
          },
          {
            "name": "Trello",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a7418"
          },
          {
            "name": "Google suite",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a7419"
          },
          {
            "name": "Microsoft 365",
            "personal": true,
            "profesional": true,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a741a"
          },
          {
            "name": "SPSS",
            "personal": true,
            "profesional": false,
            "certification": false,
            "_id": "6761baceefa0a5da4a1a741b"
          }
        ],
        "aboutMe": "I am a very ambitious and demanding person with myself. I consider myself a technology lover and always try to advocate for simplifying and improving existing processes in companies. I believe that the future can no longer be understood in any other way than with technology and humans united.",
        "web": "https://www.linkedin.com/in/iv%C3%A1n-bernab%C3%A9-padilla/",
        "telephone": "685591340",
        "skills": [],
        "languages": [
          {
            "name": "English",
            "level": "advanced"
          },
          {
            "name": "Spanish",
            "level": "Basic"
          },
          {
            "name": "Valencian",
            "level": "Basic"
          }
        ],
        "prefferedWork": [
          "remote"
        ],
        "openPrefferedWork": false,
        "salary": 40000,
        "openSalary": false,
        "user": {
          "_id": "66e32f6e743b31645e88f49c",
          "email": "hello@digitalando.org",
          "name": "Digitalando ",
          "password": "$2b$10$hOrnPm.wBcNPitzve/1/uOHBSNDMPfGHV13xPYqQ9Bjc1tidc9bt2",
          "avatar": "https://res.cloudinary.com/df82flqqr/image/upload/v1732793991/digitalando_3d_logo_bacon_01_la3cmo.jpg",
          "verified": false,
          "createdAt": "2024-09-12T18:14:06.326Z",
          "updatedAt": "2024-11-28T11:55:47.780Z",
          "__v": 0
        },
        "experience": [
          {
            "name": "IT Recruiter Consultant",
            "entity": "The Adecco Group",
            "start": 2021,
            "end": 2022,
            "description": "Selection and evaluation of all types of technological profiles. Personalized attention to companies and professionals in the TI sector. Administration and analysis of tests (skills, languages). Interviews by competencies and assessment cen",
            "country": "España",
            "isRemote": false,
            "_id": "6761baceefa0a5da4a1a741c"
          },
          {
            "name": "Revenue specialist",
            "entity": "Sesame HR",
            "start": 2022,
            "end": 2023,
            "description": "Direct commercial attention to potential casualties. Saas commercial upselling. Management of teams and projects of great relevance.",
            "country": "España",
            "isRemote": false,
            "_id": "6761baceefa0a5da4a1a741d"
          },
          {
            "name": "CEO & Co-Founder",
            "entity": "Digitalando",
            "start": 2023,
            "end": null,
            "description": "",
            "country": "España",
            "isRemote": false,
            "_id": "6761baceefa0a5da4a1a741e"
          }
        ],
        "gallery": [
          "http://res.cloudinary.com/df82flqqr/image/upload/v1734458309/4b87871d2061ac3a02d25281ec850986_profile.jpg",
          "http://res.cloudinary.com/df82flqqr/image/upload/v1734458310/f16a852057dffa129689e4749dec041f_profile.jpg"
        ],
        "createdAt": "2024-12-17T17:54:22.240Z",
        "updatedAt": "2024-12-18T11:40:22.421Z",
        "__v": 0,
        "country": "france"
      }
    ])

    fetchTalents();
  }, [searchParams]);

  // Función para realizar la búsqueda
  const search = async (params) => {
    // Actualizar estado de parámetros de búsqueda
    setSearchParams(params);

    // Guardar la búsqueda para análisis
    try {
      // Esto típicamente usaría el ID del usuario autenticado
      const userId = 3; // ID del reclutador hardcodeado para demo

      await createSearch({
        ...params,
        userId,
        createdAt: new Date().toISOString()
      });
    } catch (err) {
      console.error("Error al guardar la búsqueda:", err);
    }
  };

  return {
    talents,
    isLoading,
    error,
    search,
    searchParams
  };
}