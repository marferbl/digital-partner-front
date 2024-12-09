import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { AuthProviderWrapper } from "./context/userContext";
import { PageRoutes } from "./routes";
import "@fontsource/montserrat/400.css";
import theme from "./theme";
import { I18nextProvider } from "react-i18next"
import i18Next from "i18next"
import 'react-tooltip/dist/react-tooltip.css'
import { Analytics } from "@vercel/analytics/react"

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import './fonts/RoobertTRIAL-Bold.ttf'
import './fonts/RoobertTRIAL-Regular.ttf'
import './fonts/RoobertTRIAL-Medium.ttf'
import './fonts/RoobertTRIAL-Light.ttf'
import './fonts/RoobertTRIAL-Heavy.ttf'
import './fonts/RoobertTRIAL-SemiBold.ttf'




const userLocale = navigator.language || navigator.userLanguage; // e.g., "es-ES" or "en-US"
const userLanguage = userLocale.startsWith('es') ? 'es' : 'en';

i18Next.init({
  interpolation: {
    escapeValue: false, // React already escapes values to prevent XSS
  },
  lng: userLanguage, // dynamically set language
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18Next}>
    <AuthProviderWrapper>
      <ChakraProvider theme={theme}>
        <Analytics />
        <PageRoutes />
      </ChakraProvider>
    </AuthProviderWrapper>
  </I18nextProvider>
);
