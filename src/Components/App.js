import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./5-Pages/Home";
import Games from "./5-Pages/Games/Games";
import ComingSoon from "./5-Pages/Games/ComingSoon";

export default function App() {
  return (
    <>
      <ul>
        <li><NavLink end to={"/"}>Home</NavLink></li>
        <ul>
          <li><NavLink end to={"/games"}>Games</NavLink></li>
          <li><NavLink end to={"/games/coming-soon"}>Coming Soon</NavLink></li>
        </ul>
      </ul>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path="coming-soon" element={<ComingSoon />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
