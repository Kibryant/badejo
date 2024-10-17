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
import { menuData } from '@/constants/menu'
import { drinks } from '@/constants/drinks'

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
]

const drinkCategories = Object.keys(drinks).map(category => ({
  name: category,
  // @ts-ignore - Object.entries returns [key, value] pairs
  items: Object.entries(drinks[category]),
}))

export function SeafoodMenu() {
  const [activeTab, setActiveTab] = useState('starters')

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const renderMenuItems = (items: any[]) => {
    return items.map((item, index) => (
      <Card
        key={`${index + 1}`}
        className="w-full md:w-64 m-2 bg-white bg-opacity-80 backdrop-blur-sm transition-all hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle className="">{item.name}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <span className="text-green-700 font-bold">{item.price}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Detalhes</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-[#7E4108]">
                  {item.name}
                </DialogTitle>
                <DialogDescription>{item.description}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>Preço: {item.price}</p>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    ))
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md p-4">
        <div className="flex justify-between items-center">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full h-32 sm:h-fit"
          >
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {tabs.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
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
                {tab.label}
              </h2>
              <div className="flex flex-wrap justify-center">
                {renderMenuItems(menuData[tab.value as keyof typeof menuData])}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-12 text-black rounded-lg py-16 sm:py-40">
        <h2 className="text-4xl font-semibold mb-6 text-[#7E4108] text-center">
          Bebidas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {drinkCategories.map((category, index) => (
            <div
              key={`${index + 1}`}
              className="w-full bg-[#FCFDFE] rounded-lg shadow-md p-4 border border-[#7E4108]"
            >
              <h3 className="text-lg font-semibold text-[#7E4108]">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map(([key, drink], drinkIndex) => (
                  <Card
                    key={`${drinkIndex + 1}`}
                    className="w-full bg-white bg-opacity-80 backdrop-blur-sm transition-all hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">
                        {
                          (drink as { description: string; price: number })
                            .description
                        }
                      </CardTitle>
                      <CardDescription className="text-green-700 font-bold">
                        R${' '}
                        {(
                          drink as { description: string; price: number }
                        ).price.toFixed(2)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
