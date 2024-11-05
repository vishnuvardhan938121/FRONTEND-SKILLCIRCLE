import React, { useEffect, useState } from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import navigationRoutes from "./routes/auth-route";
import Home from "./pages/Home";
import ProtectedRouter from "./middleware/ProtectedRouter";
import nonAuthRoute from "./routes/non-auth-route";
import SuspenseLayout from "./components/SuspenseLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRouter />}>
            <Route>
              {navigationRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children &&
                    route.children.map((child, childIndex) => (
                      <Route
                        key={childIndex}
                        path={child.path}
                        element={child.element}
                      />
                    ))}
                </Route>
              ))}
            </Route>
          </Route>

          {nonAuthRoute.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
