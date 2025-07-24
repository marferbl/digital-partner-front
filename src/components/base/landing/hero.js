import { useTranslation } from "react-i18next";
import { SoftwareSearcherInput } from '../software-searcher-input'
import { FiTool, FiRepeat, FiCalendar } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const { t, i18n } = useTranslation("global")
  const navigate = useNavigate()

  const handleCreateAd = () => {
    navigate('/start', { state: { filter: 'register' } })
  }

  const goToSearch = (key) => {
    navigate('search', { state: { filters: { lineType: key } } }, { replace: true }
    );
  }

  return (
    <div className="flex flex-col h-fit-content">
      <div className={`relative text-white overflow-hidden bg-black h-76 md:h-160`}>
        <div className="absolute inset-0">
          <video
            src={'/videos/header-logo.mp4'}
            autoPlay
            loop
            muted
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>


        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-20 md:mt-0">
          {/* <SoftwareSearcherInput /> */}

          <div className='flex flex-col items-center justify-center mb-8'>
            <span className='font-montserrat text-white text-3xl md:text-6xl font-base pb-1 opacity-90'>
              {t('whatYouNeed')}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-4xl px-4">
            {/* Card Soluciones */}
            <div onClick={() => goToSearch('solutions')} className="backdrop-blur-md cursor-pointer bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <FiTool className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold text-white">{t('solutions')}</h3>
              </div>
            </div>

            {/* Card Servicios */}
            <div onClick={() => goToSearch('services')} className="backdrop-blur-md cursor-pointer bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <FiRepeat className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold text-white">{t('services')}</h3>
              </div>
            </div>

            {/* Card Eventos */}
            <div onClick={() => goToSearch('events')} className="backdrop-blur-md cursor-pointer bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <FiCalendar className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold text-white">{t('events')}</h3>
              </div>
            </div>
          </div>


        </div>


      </div>
      {/* Sección de anuncios */}
      <div className="mt-12 md:mt-0 text-center max-w-3xl mx-auto px-4 h-fit md:h-72">
        <h2 className="font-montserrat font-base text-white text-lg md:text-4xl  mb-4">
          {t('alreadyHaveThem')}
        </h2>
        <p className="font-montserrat text-white text-sm md:text-xl b-8 opacity-90 leading-relaxed">
          {t('dontMissOpportunity')}
        </p>
        <button
          onClick={handleCreateAd}
          className="bg-gradient-to-r text-sm md:text-lg mt-4 md:mt-8 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-montserrat font-semibold px-4 py-2 md:px-8 md:py-4  rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20"
        >
          {t('createAdButton')}
        </button>
      </div>
    </div>
  )
}
