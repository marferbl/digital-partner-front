import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useLocation } from "react-router-dom";
import { useAuth } from "../src/App";

export default function HomePage() {
  const [location, navigate] = useLocation();
  const { user } = useAuth();

  const handleTalentClick = () => {
    if (user && user.userType === "talent") {
      navigate("/talent-form");
    } else {
      // In a real app, you might want to show a login modal first
      navigate("/talent-form");
    }
  };

  const handleRecruiterClick = () => {
    if (user && user.userType === "recruiter") {
      navigate("/recruiter");
    } else {
      // In a real app, you might want to show a login modal first
      navigate("/recruiter");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              TalentMatch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos el mejor talento digital con las empresas que buscan potenciar su crecimiento
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="transform hover:scale-105 transition duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="h-40 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-32 h-32 text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Soy talento digital</h2>
              <p className="text-gray-600 mb-8 text-center">
                Crea tu perfil profesional y conecta con empresas que buscan personas con tus habilidades.
              </p>
              <Button
                onClick={handleTalentClick}
                className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
              >
                Crear mi perfil
              </Button>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="h-40 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-32 h-32 text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Soy reclutador</h2>
              <p className="text-gray-600 mb-8 text-center">
                Busca el talento ideal para tu empresa usando nuestro sistema de matching avanzado.
              </p>
              <Button
                onClick={handleRecruiterClick}
                className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
              >
                Buscar talento
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Crea tu perfil</h3>
              <p className="text-gray-600 text-center">
                Completa tu información profesional con tus habilidades y experiencia.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Busca talento</h3>
              <p className="text-gray-600 text-center">
                Los reclutadores encuentran perfiles utilizando filtros precisos.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">¡Match!</h3>
              <p className="text-gray-600 text-center">
                Conecta con talento que se ajusta perfectamente a tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}