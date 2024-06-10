import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

i18n.use(initReactI18next)
    .use(Backend)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
