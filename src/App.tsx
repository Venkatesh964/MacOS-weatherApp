import { Desktop } from "./components/Desktop"
import { Header } from "./components/Header"
import { WeatherCard } from "./components/WeatherCard"
import macbackground from './assets/macos-catalina-mountains-island-night-stock-5k-1920x1080-189.jpg'
function App() {
  return (
    <div className={`h-screen bg-[url(./assets/macos-catalina-mountains-island-night-stock-5k-1920x1080-189.jpg)] w-screen text-white`} >
      <Header/>
      <WeatherCard/>
      <Desktop/>
    </div>
  )
}

export default App
