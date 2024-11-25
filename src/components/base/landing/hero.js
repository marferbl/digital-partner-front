import { useTranslation } from 'react-i18next'
import { SoftwareSearcherInput } from '../software-searcher-input'


export default function Hero() {
  const { t, i18n } = useTranslation("global")

  return (
    <div className="relative h-120 lg:h-screen text-white overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          src={'/videos/header-logo.mp4'}
          autoPlay
          loop
          muted
          className="object-contain lg:object-cover w-full h-1/3 md:h-5/6"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-6">
        <SoftwareSearcherInput />
      </div>
    </div>
  )
}
