'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { i18nConfig } from '@/i18n-config'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '../ui/select'
import { Flags } from '../icons/flags'

const languageOptions = [
  { value: 'en', label: 'English', Flag: Flags.Us },
  { value: 'pt-BR', label: 'Português', Flag: Flags.Br },
  { value: 'ja', label: '日本語', Flag: Flags.Ja },
  { value: 'zh', label: '中文', Flag: Flags.Zh },
]

export function LanguageChanger() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChange = (value: string) => {
    const newLocale = value

    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push(`/${newLocale}${currentPathname}`)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <Select onValueChange={handleChange} value={currentLocale}>
      <SelectTrigger className="flex items-center space-x-2 rounded-full sm:max-w-40 bg-transparent text-white">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>

      <SelectContent>
        {languageOptions.map(({ value, label, Flag }) => (
          <SelectItem key={value} value={value}>
            <span className="flex items-center space-x-2">
              <Flag width={24} height={24} />
              <span>{label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
