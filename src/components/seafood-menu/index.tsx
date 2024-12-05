'use client'

import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { menuData, type MenuItem } from '@/constants/menu'
import { drinkCategories } from '@/constants/drinks'
import { useTranslation } from 'react-i18next'
import { useRouter, useSearchParams } from 'next/navigation'

const tabImages = {
  starters: '/starters.jpg',
  portions: '/portions.jpg',
  moquecas: '/moqueca-mista.jpg',
  combineds: '/combineds-image.jpg',
  bobos: '/camarao-coco.jpg',
  grilledFried: '/grilled-fried.jpg',
  specials: '/moqueca-capixaba.jpg',
  individuals: '/individuals-image.jpg',
  alternatives: '/alternatives-image.jpg',
  optionalAddOns: '/optionalAddOns-image.jpg',
  drinks: '/drinks.jpg',
}

const tabs = [
  { value: 'starters', label: 'Entradas' },
  { value: 'portions', label: 'Porções' },
  { value: 'moquecas', label: 'Moquecas' },
  { value: 'combineds', label: 'Combinados' },
  { value: 'bobos', label: 'Bobós' },
  { value: 'grilledFried', label: 'Grelhados e Fritos' },
  { value: 'specials', label: 'Especiais' },
  { value: 'individuals', label: 'Individuais' },
  { value: 'alternatives', label: 'Alternativas' },
  { value: 'optionalAddOns', label: 'Adicionais' },
  { value: 'drinks', label: 'Bebidas' },
] as const

interface SeafoodMenuProps {
  namespace: string[]
}

export function SeafoodMenu({ namespace }: SeafoodMenuProps) {
  const { t } = useTranslation(namespace)
  const router = useRouter()
  const searchParams = useSearchParams()

  const [activeTab, setActiveTab] = useState('starters')
  const initialTab = searchParams.get('tab') || 'starters'

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab)
    router.push(`?tab=${newTab}`, { scroll: false })
  }

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <Card
        key={`${index + 1}`}
        className="w-full md:w-64 m-2 bg-white bg-opacity-80 backdrop-blur-sm transition-all hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle className="">{t(item.name)}</CardTitle>
          <CardDescription>{t(item.description)}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <span className="text-green-700 font-bold">
            {item.price && `R$${item.price}`}
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="transition-transform hover:scale-105"
              >
                {t('Detalhes')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-lg shadow-lg bg-white">
              <DialogHeader>
                <DialogTitle className="text-[#7E4108] text-2xl font-semibold text-center">
                  {t(item.name)}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 py-6 px-4">
                <div className="text-gray-700">
                  <p className="text-lg">{t(item.description)}</p>
                </div>
                <div className="text-[#7E4108] text-lg font-semibold flex justify-between">
                  <span>{t('Preço')}:</span>
                  <span>R${item.price}</span>
                </div>
              </div>
              <div className="flex justify-end gap-4 px-4">
                <DialogClose asChild>
                  <Button variant="outline" className="hover:bg-gray-200">
                    {t('Fechar')}
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    ))
  }

  const renderDrinks = () => {
    return drinkCategories.map((category, categoryIndex) => (
      <div key={`${category}-${categoryIndex + 1}`} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#7E4108]">
          {t(category.name.charAt(0).toUpperCase() + category.name.slice(1))}
        </h3>
        {category.items.map(([, drink], index) => (
          <Card
            key={`${categoryIndex}-${index + 1}`}
            className="w-full md:w-64 m-2 bg-white bg-opacity-80 backdrop-blur-sm transition-all hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle>{t(drink.description)}</CardTitle>
            </CardHeader>
            <CardFooter>
              <span className="text-green-700 font-bold">
                R${drink.price.toFixed(2)}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    ))
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md p-4">
        <div className="flex justify-between items-center">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full h-40 md:h-20"
          >
            <TabsList className="grid w-full grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-10 md:gap-4">
              {tabs.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`border ${activeTab === tab.value ? 'border-[#7E4108] shadow' : 'border-transparent'} rounded-md text-center text-[#7E4108] font-semibold hover:bg-[#7E4108] hover:text-white transition-all bg-transparent   `}
                >
                  {t(tab.label)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="mt-8">
        <Tabs value={activeTab} className="w-full">
          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className="mt-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
                {t(tab.label)}{' '}
                <span className="text-sm">
                  {t(
                    tab.label === 'Moquecas'
                      ? '- todas as moquecas acompanha arroz, pirão de peixe e uma deliciosa farofa com banana da terra'
                      : ''
                  )}
                </span>
              </h2>
              <img
                src={tabImages[tab.value as keyof typeof tabImages]}
                alt={tab.label}
                className="w-full h-52 object-cover mb-4 rounded"
              />
              {Array.isArray(menuData[tab.value]) ? (
                <div className="flex flex-wrap justify-center">
                  {renderMenuItems(menuData[tab.value] as MenuItem[])}
                </div>
              ) : (
                <div className="sm:flex sm:flex-wrap sm:justify-center">
                  {renderDrinks()}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
