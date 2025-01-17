import React, { useState } from "react";
import { createReference } from "../../../services/reference";
import { useParams, useSearchParams } from "react-router-dom";


const questions = [
    "¿Cómo valorarías la facilidad de uso del software?",
    "¿Cómo valorarías la estabilidad del software (ausencia de errores y caídas)?",
    "¿Cómo valorarías la velocidad de respuesta del software?",
    "¿Cómo valorarías la fiabilidad del software (cumple lo que promete)?",
    "¿Consideras que el software cumple con tus expectativas en general?",
    "¿Cómo valorarías la adecuación del software a tus necesidades?",
    "¿Cómo valorarías la flexibilidad del software (capacidad para adaptarse a tus necesidades)?",
    "¿Cómo valorarías la integración del software con otras herramientas o plataformas?",
    "¿Cómo valorarías la variedad de funciones y herramientas del software?",
    "¿Cómo valorarías el diseño visual del software?",
    "¿Cómo valorarías la facilidad de navegación dentro del software?",
    "¿Consideras que la interfaz es intuitiva?",
    "¿Qué tan fácil es para ti encontrar las funciones que necesitas?",
    "¿Cómo valorarías el tiempo de respuesta del soporte técnico?",
    "¿Cómo valorarías la calidad de la solución ofrecida por el soporte técnico?",
    "¿Te sientes escuchado/a por el equipo de atención al cliente?",
    "¿Cómo valorarías el nivel de conocimiento del equipo de soporte sobre el software?",
    "¿Cómo valorarías la amabilidad del personal de atención al cliente?",
    "¿Cómo valorarías la relación entre el precio y la calidad del software?",
    "¿Consideras que las características del software justifican su precio?",
    "¿Cómo valorarías las opciones de planes de precios ofrecidos?",
    "¿Cómo valorarías la facilidad de instalación y configuración del software?",
    "¿Qué tan claro te pareció el proceso de configuración inicial?",
    "¿Qué tan fácil fue integrar el software con tu infraestructura existente?",
    "¿Cómo valorarías la claridad de la documentación (manuales, guías)?",
    "¿Qué tan útil te parece el contenido educativo (tutoriales, artículos)?",
    "¿Cómo valorarías la disponibilidad de recursos de aprendizaje?",
    "¿Cómo valorarías la frecuencia de las actualizaciones del software?",
    "¿Consideras que las actualizaciones aportan mejoras significativas?",
    "¿Cómo valorarías la estabilidad del software después de cada actualización?",
    "¿Cómo valorarías el nivel de seguridad que ofrece el software?",
    "¿Te sientes seguro/a utilizando el software para tus datos sensibles?",
    "¿Consideras que el software cumple con los estándares de seguridad actuales?",
    "¿Qué tan satisfecho/a estás con el software en general?",
    "¿Qué tan probable es que recomiendes el software a otros?",
    "¿Qué tan satisfecho/a estás con la experiencia general de uso del software?",
];

const ReferenceForm = () => {
    const [answers, setAnswers] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [contactName, setContactName] = useState("");
    const [job, setJob] = useState("");

    const { id } = useParams(); // Accessing the `id` from the route
    const [searchParams] = useSearchParams();

    const entityType = searchParams.get("entityType");
    const email = searchParams.get("email");




    const handleAnswerChange = (questionIndex, value) => {
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[questionIndex] = { order: questionIndex + 1, answer: value };
            return updatedAnswers;
        });
    };

    const sendReference = async (e) => {
        const reference = {
            entity: {
                model: entityType,
                itemId: id
            },
            companyName,
            contactName,
            job,
            email,
            answers,
        };

        try {
            createReference(reference).then((response) => {
                console.log(response);
            });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="p-6 bg-gray-100 flex items-center flex-col ">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Encuesta de Evaluación
            </h1>
            <form className="space-y-4 w-full lg:w-1/2">
                <>
                    <div className="flex flex-col gap-4 pb-6">
                        <p className="text-gray-700 font-semibold">
                            ¿Cual es el nombre de tu empresa?
                        </p>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" onChange={(e) => setCompanyName(e.target.value)} />
                        <p className="text-gray-700 font-semibold">
                            ¿Cual es tu nombre?
                        </p>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" onChange={(e) => setContactName(e.target.value)} />
                        <p className="text-gray-700 font-semibold">
                            ¿Cual es tu cargo?
                        </p>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400" onChange={(e) => setJob(e.target.value)} />
                    </div>
                </>

                {
                    questions.map((question, index) => (
                        <div key={index} className="p-4 bg-white shadow rounded-lg">
                            <p className="mb-2 text-gray-700 font-semibold">
                                {index + 1}. {question}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Nada satisfechx</span>
                                <div className="flex gap-2">
                                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                        <label key={num} className="flex items-center">
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value={num}
                                                onChange={() => handleAnswerChange(index, num)}
                                                className="w-4 h-4 text-blue-500 focus:ring-blue-400 cursor-pointer"
                                            />
                                            <span className="sr-only">{num}</span>
                                        </label>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">Muy satisfechx</span>
                            </div>
                        </div>
                    ))

                }
            </form >
            <button
                type="button"
                className="mt-6 w-full lg:w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => sendReference()}
            >
                Enviar Respuestas
            </button>
        </div >
    );
};

export default ReferenceForm;
