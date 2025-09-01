import React from 'react'
import { Link } from 'react-router'

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {recipe.strMeal}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {recipe.strCategory}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                {recipe.strArea}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
