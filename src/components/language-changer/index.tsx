'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

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

interface LanguageChangerProps {
    locale: string
}

export function LanguageChanger({ locale }: LanguageChangerProps) {
    const currentLocale = locale
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
            <SelectTrigger className="w-[140px] bg-transparent text-[#FCFDFE] border-[#FCFDFE] hover:bg-[#FCFDFE] hover:text-[#7E4108] transition-colors rounded-full font-medium">
                <SelectValue placeholder="Idioma" />
            </SelectTrigger>

            <SelectContent className="bg-white border-[#7E4108] text-[#7E4108]">
                {languageOptions.map(({ value, label, Flag }) => (
                    <SelectItem
                        key={value}
                        value={value}
                        className="focus:bg-[#7E4108] focus:text-white cursor-pointer"
                    >
                        <span className="flex items-center gap-2">
                            <Flag width={20} height={20} />
                            <span>{label}</span>
                        </span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
