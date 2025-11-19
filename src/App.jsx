import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Button from "./components/shared/Button"
import Navbar from "./components/shared/Navbar"
import AboutPage from "./components/pages/AboutPage"
import ContactPage from "./components/pages/ContactPage"
import WeatherPage from "./components/pages/WeatherPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
