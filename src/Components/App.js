import { Route, Routes } from "react-router-dom"
import Home from "./5-Pages/Home"
import Games from "./5-Pages/Games/Games"
import ComingSoon from "./5-Pages/Games/ComingSoon"

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="games">
          <Route index element={<Games />} />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Route>
      </Route>
    </Routes>
  )
}