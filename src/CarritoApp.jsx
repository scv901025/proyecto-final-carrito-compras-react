import { NavBarComponent } from "./components/NavBarComponent"
import {Navigate, Route, Routes } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from "./pages/CartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
              <NavBarComponent/>
              <div className="container">
                  <Routes>
                      <Route path='/' element = { <ProductsPage></ProductsPage>}></Route>
                      <Route path='/carrito' element = { <CartPage></CartPage>}></Route>
                      <Route path='/*' element = {<Navigate to='/' />}></Route>
                  </Routes> 
              </div>
            </CartProvider>
        </ProductProvider>
    )
}
