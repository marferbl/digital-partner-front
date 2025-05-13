import { Avatar } from "@chakra-ui/react";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";

export default function TalentCard({ talent }) {

  const { t } = useTranslation('global');
  // Generate a match percentage (this would be calculated based on the actual algorithm)
  const matchPercentage = Math.floor(Math.random() * 21) + 80; // Random between 80-100%
  
  // Get the first experience entry if it exists
  const firstExperience = talent.experience && talent.experience.length > 0 
    ? talent.experience[0] 
    : null;
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative">
        {/* Using a gradient background instead of an image for the profile header */}
        <div className="w-full h-52 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
        <Avatar name={talent?.fullName} src= {talent.user?.avatar} h={20} w={20} filter='blur' />
        </div>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
            {matchPercentage}% Match
          </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
          <h3 className="text-xl font-bold blur">{talent.fullName}</h3>
          <p className="text-sm">{t(talent.job)}</p>
        </div>
      </div>
      
      <div className="p-4 space-y-4 overflow-y-auto flex-grow">
        <div>
          <h4 className="text-sm font-medium text-gray-500">Ubicación</h4>
          <p className="font-medium text-gray-900">{talent.city}, {talent.country}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500">Tecnologías</h4>
          <div className="flex flex-wrap gap-1 mt-1">
            {talent.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500">Introducción</h4>
          <p className="text-sm text-gray-700">{talent.introduction || talent.aboutMe}</p>
        </div>
        
        {firstExperience && (
          <div>
            <h4 className="text-sm font-medium text-gray-500">Experiencia destacada</h4>
            <div className="mt-1">
              <p className="text-sm font-medium text-gray-900">
                {firstExperience.position} - {firstExperience.company}
              </p>
              <p className="text-xs text-gray-500">
                {firstExperience.startYear} - {firstExperience.current ? 'Actual' : firstExperience.endYear}
              </p>
            </div>
          </div>
        )}
      </div>
      
     
    </div>
  );
}