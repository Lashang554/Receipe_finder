import React from 'react'
import { useParams, Link } from 'react-router'
import { useGetRecipeByIdQuery } from '../Services/recipeApi'

const RecipeDetails = () => {
  const { id } = useParams()
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  const recipeData = recipe?.meals?.[0]
  if (!recipeData) return <p>Recipe not found</p>

  // Extract ingredients and measurements
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeData[`strIngredient${i}`]
    const measure = recipeData[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      })
    }
  }

  return (
    <div>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              {recipeData.strMeal}
            </h2>
            <p className="mt-4 text-base text-gray-700">
              {recipeData.strInstructions?.substring(0, 200)}...
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden">
              <img
                className="h-full w-full object-cover transition-all duration-300"
                src={recipeData.strMealThumb}
                alt={recipeData.strMeal}
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">{recipeData.strCategory}</h3>
              <p className="mt-2 text-lg">{recipeData.strArea}</p>
              
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Ingredients:</h4>
                <ul className="space-y-2">
                  {ingredients.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm">
                        {item.ingredient}
                        {item.measure && <span className="text-gray-500"> ({item.measure})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Instructions:</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {recipeData.strInstructions}
                </p>
              </div>

            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecipeDetails
