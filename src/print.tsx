import "@fontsource-variable/inter/index.css"; // Note the /index.css
import "@fontsource/geist-mono";
import "@fontsource/geist-sans";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShortTechCV from "./components/cv/ShortTechCV";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="font-sans antialiased">
            <ShortTechCV isPrintPage={true} />
        </div>
    </StrictMode>
);
