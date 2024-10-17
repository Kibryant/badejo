import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

type Drink = {
  description: string
  price: number
}

type DrinkCategoryProps = {
  category: {
    name: string
    items: [string, Drink][]
  }
}

export default function DrinkCategory({ category }: DrinkCategoryProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-[#FCFDFE] text-[#7E4108] border-[#7E4108] hover:bg-[#7E4108] hover:text-white hover:border-transparent transition-all duration-300 rounded-lg shadow-md py-3"
        >
          {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black rounded-lg shadow-lg border border-[#7E4108] mt-2">
        {category.items.map(([key, drink], drinkIndex) => (
          <DropdownMenuItem
            key={`${drinkIndex + 1}`}
            className="px-4 py-2 hover:bg-[#7E4108] hover:text-white rounded-md transition-colors duration-200"
          >
            {drink.description} - R${drink.price.toFixed(2)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
