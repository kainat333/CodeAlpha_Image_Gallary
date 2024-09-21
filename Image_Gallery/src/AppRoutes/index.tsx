import { BrowserRouter,Routes,Route } from "react-router-dom"
import Gallery from "../gallery"
import AlGallery from "../pages/all-images"
import AppLayout from "../app-layout"
// import AppLayout from "../app-layout"
const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route  element={<AppLayout/>}>
       <Route  path="/slideshow" element={<Gallery/>}/>
       <Route path="/" element={<AlGallery/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)
}
export default AppRoutes