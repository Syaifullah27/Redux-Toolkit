import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import { Route } from 'react-router-dom'
import MenuPage from './Pages/MenuPage'

const App = () => {
  




  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/menu' element={<MenuPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
