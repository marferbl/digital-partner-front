import { useTranslation } from 'react-i18next'
import { SoftwareSearcherInput } from '../software-searcher-input'


export default function Hero() {
  const { t, i18n } = useTranslation("global")

  return (
    <div className={`relative text-white overflow-hidden bg-black h-72 md:h-160`}>
      <div className="absolute inset-0">
        <video
          src={'/videos/header-logo.mp4'}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-6">
        <SoftwareSearcherInput />
      </div>
    </div>
  )
}
