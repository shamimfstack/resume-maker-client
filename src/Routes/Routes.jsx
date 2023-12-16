import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn/SignIn";
import Templates from "../Pages/Templates/Templates/Templates";
import ResumeForm from "../Pages/ResumeForm/ResumeForm";


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
            },
            {
                path: 'templates',
                element: <Templates></Templates>
            },
            {
                path: 'resumeForm',
                element: <ResumeForm></ResumeForm>
            }
        ]
    }
])

export default Routes;
