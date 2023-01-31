import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import ScrollToTop from "./scroll/ScrollToTop";

const Layout = ()=>{
  return (
    <div className="app">
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/reservation",
        element:<Reservation/>
      },
    ]
  },
]);


function App() {
  return (
    <div>
      <RouterProvider basename="/Little-Lemon" router={router} />
    </div>
  );
}

export default App;
