import { useEffect, useState } from "react";
import SearchFilters from "../../components/selection/SearchFilters";
import CardSwiper from "../../components/selection/CardSwiper";
import TalentDetails from "../../components/selection/TalentDetails";
import { Loader2 } from "lucide-react";
import { getAllTalents } from "../../services/freelance";
import { useTranslation } from "react-i18next";
import { selectCandidate, discardCandidate } from "../../services/vacancy-candidates";

export default function RecruiterSearch({ vacancy }) {
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({})
  const { t } = useTranslation("global");

  useEffect(() => {
    if (vacancy) {
      setSearchParams({
        salaryMin: vacancy.salaryMin,
        salaryMax: vacancy.salaryMax,
        job: vacancy.job,
        location: vacancy.location,
        languages: vacancy.languages,
      });
    }
  }, [vacancy]);

  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      fetchTalents(searchParams);
    }
  }, [searchParams]);


  const fetchTalents = async (params) => {

    try {
      setIsLoading(true);
      const response = await getAllTalents(params);
      setTalents(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching talents:", error);
    }
  };

  const handleSelectTalent = async (talent) => {
    setSelectedTalent(talent);
  };

  const handleSearch = (params) => {
    fetchTalents(params);
  };

  const handleTalentSelection = async (talent, selected) => {
    try {
      if (selected) {
        await selectCandidate(vacancy._id, talent._id);
      } else {
        await discardCandidate(vacancy._id, talent._id);
      }
    } catch (error) {
      console.error("Error selecting talent:", error);
    }
  };




  return (
    <div className="min-h-screen bg-neutralblack">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="px-4 py-5 sm:px-6 mb-6">
          <h1 className="text-2xl font-bold text-white">Encuentra el talento perfecto</h1>
          <p className="mt-1 max-w-2xl text-sm text-white">
            Desliza para encontrar los mejores candidatos para tu posición.
          </p>
        </div>

        {/* Search filters */}
        {/* <SearchFilters onSearch={handleSearch} initialValues={searchParams} /> */}
        <div className="px-4 py-5 sm:px-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-2">Filtros de búsqueda</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(searchParams).map(([key, value]) => {
              const text = `${t(key)}: ${Array.isArray(value) ? value.join(", ") : value ? t(value) : "No especificado"}`;
              return (
                <span
                  key={key}
                  className="text-sm font-medium px-3 py-1 rounded-xl shadow-sm bg-pinkpulse text-black"
                >
                  {text}
                </span>
              );
            })}
          </div>
        </div>



        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Buscando talentos...</span>
          </div>
        )}

        {/* Results section */}
        {!isLoading && (
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* Card Swiper section */}
            <div className="w-full md:w-1/2">
              <CardSwiper
                talents={talents}
                onSelectTalent={handleSelectTalent}
                onTalentSelection={handleTalentSelection}
                currentSelected={selectedTalent}
              />
            </div>

            {/* Talent details section */}
            <div className="w-full md:w-1/2">
              {selectedTalent ? (
                <TalentDetails talent={selectedTalent} />
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No hay talento seleccionado</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Selecciona un perfil de las tarjetas o comienza a deslizar para encontrar candidatos.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No results state */}
        {!isLoading && talents.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center mt-8">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron resultados</h3>
            <p className="mt-1 text-sm text-gray-500">
              Prueba a ajustar tus filtros de búsqueda para encontrar más candidatos.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}