import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import TalentCard from "./TalentCard";
import { Button } from "./ui/button";
import { saveTalent } from "../services/freelance";
import { useToast } from "../hooks/use-toast";

export default function CardSwiper({ talents, onSelectTalent, currentSelected }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState(null);
  const constraintsRef = useRef(null);
  const { toast } = useToast();
  
  // Set initial talent selection
  useEffect(() => {
    if (talents.length > 0 && !currentSelected) {
      onSelectTalent(talents[0]);
    }
  }, [talents, currentSelected, onSelectTalent]);
  
  // If we've gone through all cards, show a message
  const allCardsViewed = currentIndex >= talents.length;
  
  // Función para guardar un talento
  const handleSaveTalent = async (talentId) => {
    
    try {
      // await saveTalent({
      //   recruiterId: user.id,
      //   talentId
      // });
      
      toast({
        title: "Candidato guardado",
        description: "El candidato ha sido guardado en tu lista.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo guardar el candidato. Inténtalo de nuevo.",
        variant: "destructive"
      });
    }
  };
  
  // Skip to next card
  const nextCard = (liked) => {
    if (currentIndex < talents.length) {
      setExitDirection(liked ? "right" : "left");
      
      // If card was liked, save it
     
      
      // After animation, update index and select next card
      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        
        if (nextIndex < talents.length) {
          onSelectTalent(talents[nextIndex]);
        }
        
        setExitDirection(null);
      }, 300);
    }
  };
  
  // Reset to first card
  const resetCards = () => {
    setCurrentIndex(0);
    if (talents.length > 0) {
      onSelectTalent(talents[0]);
    }
  };
  
  // Card drag values for swipe animations
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-30, 0, 30]);
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0]);
  
  const handleDragEnd = (info) => {
    if (info.offset?.x > 100) {
      nextCard(true);
    } else if (info.offset?.x < -100) {
      nextCard(false);
    }
  };
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Candidatos ({talents.length})
          </h2>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>{Math.min(currentIndex + 1, talents.length)}/{talents.length}</span>
            <div className="w-24 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-1 bg-blue-500" 
                style={{ width: `${(currentIndex / talents.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="relative h-[550px]" ref={constraintsRef}>
          {allCardsViewed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow border">
              <svg className="h-16 w-16 text-gray-400 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">¡Has visto todos los perfiles!</h3>
              <p className="text-gray-600 mb-6">
                No hay más candidatos que coincidan con tus criterios de búsqueda actuales.
              </p>
              <Button onClick={resetCards}>
                Volver a empezar
              </Button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {talents.length > 0 && currentIndex < talents.length && (
                <motion.div
                  key={currentIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={
                    exitDirection === "left"
                      ? { x: -300, opacity: 0, rotate: -30 }
                      : exitDirection === "right"
                      ? { x: 300, opacity: 0, rotate: 30 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  style={{ x, rotate, opacity }}
                  drag="x"
                  dragConstraints={constraintsRef}
                  onDragEnd={handleDragEnd}
                  dragElastic={0.7}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <TalentCard talent={talents[currentIndex]} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {!allCardsViewed && (
          <div className="flex justify-between mt-4 w-full">
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between w-full px-10">
        <button  className="rounded-full p-3 bg-white text-rose-500 shadow-sm hover:bg-rose-50 transition-colors border border-gray-200"
              onClick={() => nextCard(false)}
              >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="rounded-full p-3 bg-white text-blue-500 shadow-sm hover:bg-blue-50 transition-colors border border-gray-200"
               onClick={() => onSelectTalent(talents[currentIndex])}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button className="rounded-full p-3 bg-white text-emerald-500 shadow-sm hover:bg-emerald-50 transition-colors border border-gray-200"
        onClick={() => nextCard(true)}>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
          </div>
          
        )}
      </div>
      
    </div>
  );
}