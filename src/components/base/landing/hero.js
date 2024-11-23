import { useTranslation } from 'react-i18next'
import { SoftwareSearcherInput } from '../software-searcher-input'
import backgroundVideo from '../../../videos/header-logo.mp4'


export default function Hero() {
  const { t, i18n } = useTranslation("global")

  return (
    <div className="relative h-screen text-white overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          className="object-cover object-center w-full h-1/2 md:h-5/6"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-6">
        <SoftwareSearcherInput />
      </div>
    </div>
  )
}
