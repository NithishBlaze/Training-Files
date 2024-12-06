import { createBrowserRouter } from "react-router-dom"
import VirtualDOM from "../component/VirutalDOM"
import EventComp from "../component/EventComp";
import MouseHoverCOunter from "../component/MouseHoverCOunter";
import FunctionComp from "../component/Function";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import MainDashboardComp from "../Layout/MainDashboardComp";
import LoginComp from "../Layout/LoginComp";
import MyFavColorComp from "../component/MyFavColorComp";
import FormValidationComp from "../component/FormValidationComp";
import FormValidation from "../task/FormValidation";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
const routing = createBrowserRouter([
    { path: "", element: <LoginComp /> },
    {
        path: "mainDashboard", element: <MainDashboardComp />, children: [
            { path: "virtualdom", element: <VirtualDOM /> },
            
            { path: "", element: <EventComp /> },
            { path: "hover", element: <MouseHoverCOunter /> },
            { path: "function", element: <FunctionComp /> },
            { path: "MyFavColor", element: <MyFavColorComp newColor="Green" /> },
            { path: "form", element: <FormValidationComp /> },
            
            {
                path: "hooks", element: <ReactHooksComp />, children: [
                    { path: "statehooks", element: <UseStateHooksComp /> },
                    { path: "effecthooks", element: <UseEffectHooksComp /> }
                ]
            },
            { path: "productDash", element: <ProductDashComp /> },
            { path: "productAdd", element: <ProductAddComp /> },
            { path: "productEdit/:id", element: <ProductEditComp /> }
            
        ]
    },
    { path: "*", element: <PageNotFoundComp /> }
])


export default routing;