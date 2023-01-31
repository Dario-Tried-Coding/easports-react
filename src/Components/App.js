import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./5-Pages/Home";
import Games from "./5-Pages/Games";
import ComingSoon from "./5-Pages/ComingSoon";
import ScrollBlockedContext from "Context/ScrollBlockedContext";
import NotFound from "./5-Pages/NotFound";
import Form from "./5-Pages/Form";
import Account from "./5-Pages/Account";
import EaApp from "./5-Pages/EaApp";

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
          <Route path="ea-app" element={<EaApp />} />
          <Route path="form" element={<Form />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollBlockedContext.Provider>
  );
}
