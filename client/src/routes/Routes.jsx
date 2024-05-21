import AddPage from "../pages/admin/AddPage/AddPage";
import AdminRoot from "../pages/admin/AdminRoot";
import Basket from "../pages/site/Cart/Basket";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
    {path: "/",
    element: <SiteRoot/>,
    children: [{
        path:"",
        element:<Home/>
    },
      {
        path:"basket",
        element:<Basket/>
      }  
    ],},{
        path: "/admin",
    element: <AdminRoot/>,
    children: [
      {
        path: "",
        element: <AddPage />,
      },]
    } 
]

export default ROUTES;