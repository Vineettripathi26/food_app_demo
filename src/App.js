import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter, Outlet} from "react-router-dom"
import About from "./Components/About";
import { Error } from "./Components/Error";
import { element } from "prop-types";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Basic from "./Components/Login";
import Cbc from "./Components/Cbc";

function App() {
  return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
          {/* <Basic></Basic> */}
          {/* <Cbc></Cbc> */}
        </>
      )
  }
 export const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <App></App>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Body></Body>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/restaurant/:id',
          element: <RestaurantMenu></RestaurantMenu>
        }
      ]
    },
    {
      path: '/about',
      element: <About></About>,
      errorElement: <Error></Error>
    }
  ])  
 
export default App;
