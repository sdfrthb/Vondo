import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import "./ui/fonts/fonts.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { YMaps } from "@pbe/react-yandex-maps";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <YMaps query={{ apikey: "19a524a0-17ff-4ab0-97c2-b36960de264c" }}>
        <App />
      </YMaps>
    </Provider>
  </React.StrictMode>
);
