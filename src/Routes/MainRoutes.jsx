import { Route,Routes } from "react-router";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
export const MainRoutes = ()=>{
    return(
        <>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/movies" element={<MoviesDashboard />} />
            <Route path="/:id" element={<SingleMovieDetails />} /> */}
         </Routes>
        </>
    )
}