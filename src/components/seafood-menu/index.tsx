'use client'

import { useState } from 'react'
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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { menuData, type MenuItem } from '@/constants/menu'
import { drinkCategories } from '@/constants/drinks'
import { useTranslation } from 'react-i18next'

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

  const [activeTab, setActiveTab] = useState('starters')

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
              <Button variant="outline">{t('Detalhes')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-[#7E4108]">
                  {t(item.name)}
                </DialogTitle>
                <DialogDescription>{t(item.description)}</DialogDescription>
              </DialogHeader>
              {item.price && (
                <div className="grid gap-4 py-4">
                  <p>
                    {t('Preço')} {item.price}
                  </p>
                </div>
              )}
              {item.smallPortionPrice && (
                <div className="grid gap-4 py-4">
                  <p>
                    {t('Pequena porção:')} {item.smallPortionPrice}
                  </p>
                </div>
              )}

              {item.largePortionPrice && (
                <div className="grid gap-4 py-4">
                  <p>
                    {t('Grande porção:')}: {item.largePortionPrice}
                  </p>
                </div>
              )}
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
          {/* {category.name.charAt(0).toUpperCase() + category.name.slice(1)} */}
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
            onValueChange={setActiveTab}
            className="w-full h-40"
          >
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {tabs.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value}>
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
                {t(tab.label)}
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
