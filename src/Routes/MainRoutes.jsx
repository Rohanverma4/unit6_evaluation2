import { Route,Routes } from "react-router";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Products } from "../components/ProductsDashboard";
import { SingleProductList } from "../components/SingleProduct";
export const MainRoutes = ()=>{
    return(
        <>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProductList />} />
         </Routes>
        </>
    )
}