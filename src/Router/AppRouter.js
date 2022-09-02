import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </div>
  );
};
