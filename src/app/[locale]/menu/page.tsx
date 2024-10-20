import { initTranslations } from '@/app/i18n'
import LanguageChanger from '@/components/language-changer'
import { SeafoodMenu } from '@/components/seafood-menu'
import { TranslationsProvider } from '@/providers/translations-provider'

interface PageProps {
  params: {
    locale: string
  }
}

const namespace = ['menu']

export default async function Page({ params: { locale } }: PageProps) {
  const { t, resources } = await initTranslations(locale, namespace)

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespace}
    >
      <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
        <div className="bg-[#7E4108] text-center p-2">
          <LanguageChanger />
        </div>
        <main>
          <section className="container mx-auto py-16 sm:py-40 px-4">
            <h1 className="text-5xl font-bold mb-3 text-center text-[#7E4108]">
              {t('Nosso Cardápio')}
            </h1>
            <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-12" />

            <SeafoodMenu namespace={namespace} />
          </section>
        </main>
      </div>
    </TranslationsProvider>
  )
}
