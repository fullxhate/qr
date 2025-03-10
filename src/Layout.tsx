import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import {QrCodeGenerator} from "./components/Generate/QrCodeGenerator.tsx";
import {QrCodeScanner} from "./components/Scan/QrCodeScanner.tsx";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory.tsx";
import { ScanHistory } from "./ScanHistory/ScanHistory.tsx";

const Layout = () => {
    return (
     <div>
         <Navigation/>
         <Routes>
             <Route path="/generate" element={<QrCodeGenerator />}> </Route>
             <Route path="/scan" element={<QrCodeScanner />}> </Route>
             <Route path="/scanHistory" element={<ScanHistory />}> </Route>
             <Route path="/generateHistory" element={<GenerateHistory />}> </Route>
         </Routes>
     </div>
    );
}
    export { Layout };