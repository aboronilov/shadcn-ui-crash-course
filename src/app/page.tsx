import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

const getRecipes = async (): Promise<Recipe[]> => {
  const result = await fetch("http://localhost:4000/recipes")

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((item) => (
          <Card key={item.id} className="flex flex-col justify-between">
            <CardHeader className="flex gap-4 items-center">
              {/* Avatar */}
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View details</button>
              {item.vegan && <p>Vegan</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
