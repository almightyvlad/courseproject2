import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './UI/Header'
import { HomePage } from './pages/home/HomePage'
import { BasketPage } from './pages/basket/BasketPage'
import { ProductPage } from './pages/product/ProductPage'
import { FavoritesPage } from './pages/favorites/FavoritesPage'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import './App.css'
import { AccountPage } from './pages/auth/AccountPage'
import { useAuthRedirect } from './hooks/useAuthRedirect'
import { useUserStatus } from './hooks/useUserStatus'
import { AlhambraPage } from './pages/brands/AlhambraPage'
import { ElixirPage } from './pages/brands/ElixirPage'
import { DunlopPage } from './pages/brands/DunlopPage'
import { ErnieBallPage } from './pages/brands/ErnieBallPage'
import { CasioPage } from './pages/brands/CasioPage'
import { Footer } from './UI/Footer'
import { ProductsPage } from './pages/products/ProductsPage'
import { OrderPage } from './pages/order/OrderPage'

function App() {

  useUserStatus()

  useAuthRedirect()

  return (
    <div className='App'>

      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        
        <Route path='home' element={<HomePage />} />
        <Route path='favorites' element={<FavoritesPage />} />

        <Route path='signup' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />

        <Route path='account' element={<AccountPage />} />

        <Route path='basket' element={<BasketPage />} />

        <Route path='guitars' element={<ProductsPage />} /> 
        <Route path='synthesizers' element={<ProductsPage />} /> 
        <Route path='headphones' element={<ProductsPage />} /> 
        <Route path='drums' element={<ProductsPage />} /> 
        <Route path='audiointerfaces' element={<ProductsPage />} /> 
        <Route path='microphones' element={<ProductsPage />} /> 

        <Route path='order' element={<OrderPage />} />
        
        <Route path='product/:id' element={<ProductPage />} />

        <Route path='home/brands/alhambra' element={<AlhambraPage />} />
        <Route path='home/brands/elixir' element={<ElixirPage />} />
        <Route path='home/brands/dunlop' element={<DunlopPage />} />
        <Route path='home/brands/ernieball' element={<ErnieBallPage />} />
        <Route path='home/brands/casio' element={<CasioPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
