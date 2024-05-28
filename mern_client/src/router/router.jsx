import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom"
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../component/About";
import Blog from "../component/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayOut";
import Dashboard from "../dashboard/Dashboard";
import Uploadbooks from "../dashboard/Uploadbooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../component/Signup";
import Login from "../component/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogOut from "../component/LogOut";
import UpdateBlog from "../component/UpdateBlog";
import EditBlogs from "../component/EditBlogs";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App/>,
  children:[
   {
    path: '/',
    element: <Home/>
   },
   {
    path: "/shop",
    element: <Shop/>
   },
   {
    path: "/admin/dashboard/home",
    element: <Home/>
   },
   // {
   //  path: "/admin/blog",
   //  element: <Blog/>,
   //  children:[
   //   {
   //    path:"/admin/blog/EditBlogs/:id",
   //    element: <EditBlogs/>,
   //    loader:({params})=> fetch(`http://localhost:5000/blog/${params.id}`)
   //   }
   //  ]
   // },
   {
    path: "/about",
    element: <About/>
   },
   
   {
    path: "/book/:id",
    element: <SingleBook/>,
    loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
   }
  
  ]
 },
 {
  path: "/admin/dashboard",
  element: <DashboardLayout/>,
  children:[
   {
    path:"/admin/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>
   },
   {
    path: "/admin/dashboard/upload",
    element: <Uploadbooks/>
   },
   {
    path: "/admin/dashboard/manage",
    element: <ManageBooks/>
   },
   
   
   {
    path: "/admin/dashboard/EditBooks/:id",
    element: <EditBooks/>,
    loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
   },
  ]
 },
 {
  path: "/admin",
  element: <App/>,
  children:[
   {
    path:"/admin/blog",
    element: <Blog/>
   },
   {
    path: "/admin/EditBlogs/:id",
    element: <EditBlogs/>,
    loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
   },
  ]
 },
 {
  path: "sign-up",
  element: <Signup/>
 },{
  path: "login",
  element: <Login/>
 },
 {
  path: "logout",
  element:<LogOut/>
 },
 
 

]);

export default router;