import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ShortTechCV from "./components/cv/ShortTechCV";
import NotFound from "./NotFound";

export default function App() {
    const basename = import.meta.env.BASE_URL || "/";

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                {/* Redirect root (/) to /about */}
                <Route path="/" element={<Navigate to="/about" replace />} />
                
                {/* Application pages */}
                <Route path="/about" element={<ShortTechCV isPrintPage={false} />} />
                <Route path="/print" element={<ShortTechCV isPrintPage={true} />} />
                
                {/* 404 Fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
