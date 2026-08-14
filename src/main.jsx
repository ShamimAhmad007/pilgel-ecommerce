import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SmoothScroll from "./lib/lenis.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import ErrorBoundary from "./pages/ErrorBoundary.jsx";
import "@fontsource/space-grotesk";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <SmoothScroll>
            <App />
          </SmoothScroll>
        </CartProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
