import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['telugu']

i18n
   .use(Backend)
   .use(initReactI18next)
   .init(
      {
         fallbackLng,
         backend: {
            loadPath: '/i18n/translations/{{lng}}/{{ns}}.json'
         },
         ns: ['common'],
         defaultNS: 'common',
         react: {
            useSuspense: true,
            wait: true
         }
      },
      err => {
         if (err) {
            console.log('I18n init error', err)
         }
      }
   )

i18n.loadNamespaces(['strings'], err => {
   if (err) {
      console.log('I18n loadNamespaces error', err)
   }
})

export default i18n
