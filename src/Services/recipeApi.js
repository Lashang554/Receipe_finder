// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `search.php?s=a`,
    }),
    getRecipeById: builder.query({
      query: (id) => `lookup.php?i=${id}`,
    }),
    getRecipeByCategory: builder.query({
      query: (cat) => `filter.php?c=${cat}`,
    }),
    searchRecipe: builder.query({
      query: (search) => `search.php?s=${search}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetRecipesQuery, 
  useGetRecipeByIdQuery, 
  useGetRecipeByCategoryQuery, 
  useSearchRecipeQuery
} = recipeApi