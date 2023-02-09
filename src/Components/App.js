import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./5-Pages/Home";
import Games from "./5-Pages/Games";
import ComingSoon from "./5-Pages/ComingSoon";
import ScrollBlockedContext from "Context/ScrollBlockedContext";
import NotFound from "./5-Pages/NotFound";
import Account from "./5-Pages/Account";
import EaApp from "./5-Pages/EaApp";
import useScrollBlock from "Hooks/useScrollBlock";
import PageContentContext from "Context/pageContentContext";
import Login from "./5-Pages/Login";
import Register from "./5-Pages/Register";

export default function App() {
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);
  const pageContentRef = useRef(null);

  const [disableScroll, enableScroll] = useScrollBlock(pageContentRef);
  useEffect(() => {
    if (isScrollBlocked) disableScroll();
    else enableScroll();
  }, [isScrollBlocked, disableScroll, enableScroll]);

  return (
    <ScrollBlockedContext.Provider value={{ isScrollBlocked, setIsScrollBlocked }}>
      <PageContentContext.Provider value={pageContentRef}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="games">
              <Route index element={<Games />} />
              <Route path="coming-soon" element={<ComingSoon />} />
            </Route>
            <Route path="ea-app" element={<EaApp />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageContentContext.Provider>
    </ScrollBlockedContext.Provider>
  );
}
