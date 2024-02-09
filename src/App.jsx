import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Events from "./components/events/Events"
function App() {
  return (
    <>
    <Routes>
  
      <Route path="events" element={<Events />} />
    </Routes>

    </>
  )
}

export default App
