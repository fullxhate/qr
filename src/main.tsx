import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import {Layout} from "./Layout.tsx";


const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);