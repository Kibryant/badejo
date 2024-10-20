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

export default function LanguageChanger() {
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
      <SelectTrigger className="max-w-40">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
        <SelectItem value="ja">日本語</SelectItem>
        <SelectItem value="zh">中文</SelectItem>
      </SelectContent>
    </Select>
  )
}
