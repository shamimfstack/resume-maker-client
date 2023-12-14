import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn/SignIn";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default Routes;
