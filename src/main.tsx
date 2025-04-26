import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { GlobalStyles } from "./GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </HashRouter>
);
