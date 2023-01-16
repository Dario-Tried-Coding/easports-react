import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./5-Pages/Home";
import Games from "./5-Pages/Games";
import ComingSoon from "./5-Pages/ComingSoon";
import ScrollBlockedContext from "Context/ScrollBlockedContext";
import Navigation from "./4-Templates/Navigation";

export default function App() {
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);

  return (
    <ScrollBlockedContext.Provider value={{ isScrollBlocked, setIsScrollBlocked }}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path="coming-soon" element={<ComingSoon />} />
          </Route>
        </Route>
      </Routes>
    </ScrollBlockedContext.Provider>
  );
}
