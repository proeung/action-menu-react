import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AnalyticsProvider from "./components/AnalyticsContext";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <AnalyticsProvider namespace="my-app">
      <App />
    </AnalyticsProvider>
  </StrictMode>
);
