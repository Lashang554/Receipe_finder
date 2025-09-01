import React from 'react'
import { useGetRecipesQuery, useSearchRecipeQuery } from '../Services/recipeApi'
import { Link, useLocation } from 'react-router'

const Home = () => {
  const { data: recipes } = useGetRecipesQuery()
  console.log("recipes all data", recipes)

  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const q = params.get('q') || ''

  const { data: recipesBySearch } = useSearchRecipeQuery(q, { skip: !q })
  console.log("recipes by search", recipesBySearch)



  return (
    <div>
      <div className="mx-auto max-w-screen-lg">
        
        <div className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=400&fit=crop')" }}>
          <div className="px-4 pt-8 pb-10">
            <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop&crop=center" alt="" />
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold text-gray-800">Recipe Finder</h1>
            <p className="mt-2 text-gray-600">Discover delicious recipes from around the world. Find your next favorite meal with our extensive collection of culinary delights.</p>
          </div>
          <div className="">
            <button className="flex whitespace-nowrap rounded-lg bg-orange-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Share Recipe
            </button>
            <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 432 923 0001
            </p>
          </div>
        </div>

        <div className="px-2 sm:px-8 lg:px-0 lg:mt-8">
          <details className="rounded-md border border-gray-200 bg-white p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-base font-semibold text-gray-800">Categories</span>
              <span className="text-gray-500">⌄</span>
            </summary>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <Link className="underline" to="/category/Beef">Beef</Link>
              <Link className="underline" to="/category/Chicken">Chicken</Link>
              <Link className="underline" to="/category/Dessert">Dessert</Link>
              <Link className="underline" to="/category/Lamb">Lamb</Link>
              <Link className="underline" to="/category/Miscellaneous">Miscellaneous</Link>
              <Link className="underline" to="/category/Pasta">Pasta</Link>
              <Link className="underline" to="/category/Pork">Pork</Link>
              <Link className="underline" to="/category/Seafood">Seafood</Link>
              <Link className="underline" to="/category/Side">Side</Link>
              <Link className="underline" to="/category/Starter">Starter</Link>
              <Link className="underline" to="/category/Vegan">Vegan</Link>
              <Link className="underline" to="/category/Vegetarian">Vegetarian</Link>
            </div>
          </details>
        </div>

        <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
          {(q ? recipesBySearch?.meals : recipes?.meals)?.map((recipe) => (
            <article key={recipe.idMeal} className="relative border border-gray-300 rounded-lg p-2">
              <div className="aspect-square overflow-hidden">
                <Link to={`/${recipe?.idMeal}`}>
                  <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src={recipe?.strMealThumb}
                    alt={recipe?.strMeal}
                  />
                </Link>
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                <p className="rounded-full bg-orange-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  {recipe.strCategory}
                </p>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                    <Link to={`/${recipe?.idMeal}`} title="">
                      {recipe.strMeal}
                      <span className="absolute" aria-hidden="true"></span>
                    </Link>
                  </h3>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs text-gray-500">{recipe.strArea}</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-normal sm:text-sm md:text-base text-orange-600">
                    View Recipe
                  </p>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Home
