import React from 'react'
import { useParams, Link } from 'react-router'
import { useGetRecipeByCategoryQuery } from '../Services/recipeApi'

const Category = () => {
  const { cat } = useParams()
  const { data: recipes, isLoading, error } = useGetRecipeByCategoryQuery(cat)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <div className="mx-auto max-w-screen-lg">
        <div className="px-2 sm:px-8 lg:px-0 lg:mt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{cat} Recipes</h1>
        </div>

        <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
          {recipes?.meals?.map((recipe) => (
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
                  {cat}
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
                    <span className="text-xs text-gray-500">View Recipe</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-normal sm:text-sm md:text-base text-orange-600">
                    Details
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

export default Category
