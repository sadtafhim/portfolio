import { createBrowserRouter } from "react-router";
import MainLayout from "../src/layout/MainLayout";
import HomePage from "../src/Components/Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            }
        ]
    },
]);