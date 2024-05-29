import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import PerformanceTest from "./performance.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
        }}
    >
        <App />
        {/* <PerformanceTest /> */}
    </ConfigProvider>
);
