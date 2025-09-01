import { Routes, Route } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Category from './pages/Category'

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:id" element={<RecipeDetails />} />
        <Route path="/category/:cat" element={<Category />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
