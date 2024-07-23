import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./layout/authLayout/LoginPage.tsx";
import SignupPage from "./layout/authLayout/SignupPage.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
