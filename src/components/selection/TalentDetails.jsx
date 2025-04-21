import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../hooks/use-toast";
// import { useAuth } from "src/App";

export default function TalentDetails({ talent }) {
  const [activeTab, setActiveTab] = useState("summary");
  // const { user } = useAuth();
  const { toast } = useToast();

  // Generate a match percentage (this would be calculated based on the actual algorithm)
  const matchPercentage = Math.floor(Math.random() * 21) + 80; // Random between 80-100%

  // Save talent mutation
  // const saveTalentMutation = useMutation({
    // mutationFn: async () => {
    //   if (!user) throw new Error("You must be logged in to save talents");
      
    //   return apiRequest("POST", "/api/saved-talents", {
    //     recruiterId: user.id,
    //     talentId: talent.id
    //   });
    // },
    // onSuccess: () => {
    //   toast({
    //     title: "Candidato guardado",
    //     description: "El candidato ha sido guardado en tu lista.",
    //   });
    // },
    // onError: () => {
    //   toast({
    //     title: "Error",
    //     description: "No se pudo guardar el candidato. Inténtalo de nuevo.",
    //     variant: "destructive"
    //   });
    // }
  // });

  // Contact talent mutation
  // const contactTalentMutation = useMutation({
    // mutationFn: async () => {
    //   if (!user) throw new Error("You must be logged in to contact talents");
      
    //   // In a real app, this would send a message or email
    //   return new Promise(resolve => setTimeout(resolve, 1000));
    // },
    // onSuccess: () => {
    //   toast({
    //     title: "Mensaje enviado",
    //     description: "Se ha enviado un mensaje al candidato.",
    //   });
    // },
    // onError: () => {
    //   toast({
    //     title: "Error",
    //     description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    //     variant: "destructive"
    //   });
    // }
  // });

  // const handleSaveTalent = () => {
  //   saveTalentMutation.mutate();
  // };

  // const handleContactTalent = () => {
  //   contactTalentMutation.mutate();
  // };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-700 text-white p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{talent.fullName}</h2>
            <p className="mt-1">{talent.job}</p>
            <div className="flex items-center mt-2 text-blue-100">
              <span className="material-icons text-sm mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <span>{talent.city}, {talent.country}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-blue-600">
              {talent.fullName.charAt(0)}
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-white text-blue-700 inline-flex items-center px-3 py-1.5 rounded text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            {matchPercentage}% Match
          </span>
          <div className="ml-auto space-x-2">
            <Button 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Guardar
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contactar
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button 
            className={`${activeTab === 'summary' ? 'border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'} px-1 pb-4 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('summary')}
          >
            Resumen
          </button>
          <button 
            className={`${activeTab === 'experience' ? 'border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'} px-1 pb-4 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('experience')}
          >
            Experiencia
          </button>
          <button 
            className={`${activeTab === 'education' ? 'border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'} px-1 pb-4 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('education')}
          >
            Educación
          </button>
          <button 
            className={`${activeTab === 'skills' ? 'border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'} px-1 pb-4 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('skills')}
          >
            Habilidades
          </button>
        </nav>
      </div>

      <div className="px-6 py-6 h-[650px] overflow-y-auto">
        {activeTab === 'summary' && (
          <>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Introducción</h3>
              <p className="mt-2 text-gray-600">
                {talent.aboutMe || talent.introduction}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Experiencia</h3>
              <div className="mt-4 space-y-6">
                {talent.experience && talent.experience.length > 0 ? (
                  talent.experience.map((exp, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute left-0 top-0 mt-1 border-r-2 border-blue-200 h-full"></div>
                      <div className="absolute left-0 top-0 mt-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{exp.name}</h4>
                        <div className="text-sm text-gray-500">{exp.entity}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {exp.start} - {!exp.end ? 'Actual' : exp.end} 
                          {!exp.end && exp.end && ` (${exp.end - exp.start} años)`}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          {exp.description}
                        </p>
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} className="bg-blue-100 text-blue-800">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No hay información de experiencia disponible</p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Educación</h3>
              <div className="mt-4 space-y-6">
                {talent.studies && talent.studies.length > 0 ? (
                  talent.studies.map((study, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute left-0 top-0 mt-1.5 w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{study.title}</h4>
                        <div className="text-sm text-gray-500">{study.institution}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {study.start} - {study.end || 'Actual'}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No hay información de educación disponible</p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Tecnologías</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {talent.technologies && talent.technologies.length > 0 ? (
                  talent.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                      <div className="font-medium text-gray-900">{tech.name}</div>
                      <div className="ml-2 text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                        {tech.level}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No hay información de tecnologías disponible</p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Idiomas</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {talent.languages && talent.languages.length > 0 ? (
                  talent.languages.map((language, i) => (
                    <div key={i} className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                      <div className="font-medium text-gray-900">{language.name}</div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No hay información de idiomas disponible</p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Preferencias laborales</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-500">Tipo de trabajo</div>
                  <div className="mt-1 text-gray-900">
                    {talent.prefferedWork && talent.prefferedWork.length > 0 
                      ? talent.prefferedWork.join(', ')
                      : "No especificado"}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-500">Salario deseado</div>
                  <div className="mt-1 text-gray-900">
                    {talent.openSalary && talent.salary > 0 
                      ? `${talent.salary.toLocaleString()}€`
                      : "No especificado"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Información de contacto</h3>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-900">{talent.email}</span>
                </div>
                {talent.telephone && (
                  <div className="flex items-center mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-900">{talent.telephone}</span>
                  </div>
                )}
                {talent.web && (
                  <div className="flex items-center mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                    <a href={talent.web.startsWith('http') ? talent.web : `https://${talent.web}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800">
                      {talent.web}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === 'experience' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Experiencia Profesional</h3>
            <div className="space-y-8">
              {talent.experience && talent.experience.length > 0 ? (
                talent.experience.map((exp, i) => (
                  <div key={i} className="border-l-2 border-blue-500 pl-4 pb-8">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{exp.name}</h4>
                      <span className="text-sm text-gray-500">
                        {exp.start} - {!exp.end ? 'Actual' : exp.end}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1">{exp.entity}</p>
                    <p className="mt-3 text-gray-600">{exp.description}</p>
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-3">
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Tecnologías utilizadas</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} className="bg-blue-100 text-blue-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No hay experiencia registrada</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Formación académica</h3>
            <div className="space-y-8">
              {talent.studies && talent.studies.length > 0 ? (
                talent.studies.map((study, i) => (
                  <div key={i} className="border-l-2 border-yellow-500 pl-4 pb-8">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{study.name}</h4>
                      <span className="text-sm text-gray-500">
                        {study.start} - {study.end || 'Actual'}
                      </span>
                    </div>
                    <p className="text-gray-500 mt-1">{study.entity}</p>
                    {study.description && (
                      <p className="mt-3 text-gray-500 text-sm">{study.description}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No hay formación académica registrada</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tecnologías</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {talent.technologies && talent.technologies.length > 0 ? (
                  talent.technologies.map((tech, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <div className="font-medium text-gray-900">{tech.name}</div>
                      <div className="flex items-center mt-1">
                        <div className="w-full bg-gray-200 rounded h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded" 
                            style={{ 
                              width: `${
                                tech.level === 'Experto' ? '90%' : 
                                tech.level === 'Avanzado' ? '75%' : 
                                tech.level === 'Intermedio' ? '50%' : 
                                '25%'
                              }`
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">{tech.level}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No hay tecnologías registradas</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {talent.skills && talent.skills.length > 0 ? (
                  talent.skills.map((skill, i) => (
                    <Badge key={i} className="px-3 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                      {skill.name}
                    </Badge>
                  ))
                ) : (
                  <div className="w-full text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No hay habilidades registradas</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Idiomas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {talent.languages && talent.languages.length > 0 ? (
                  talent.languages.map((language, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{language.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No hay idiomas registrados</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}