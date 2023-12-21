import { Index } from '../pages'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { Category } from '../pages/Category'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from '../components/NavBarComponent/NavBarComponent'


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/category/:id' element={<Category />} />
            </Routes>
        </BrowserRouter>
    )
}

