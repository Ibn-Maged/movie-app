import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ContactUs } from "./pages/ContactUs";
import { AddMovie } from "./pages/AddMovie";
import Details from "./pages/Details";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "about",
                element: <AboutPage/>,
            },
            {
                path: "contactus",
                element: <ContactUs/>,
            },
            {
                path: "add",
                element: <AddMovie/>,
            },
            {
                path: "details",
                element: <Details/>,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
