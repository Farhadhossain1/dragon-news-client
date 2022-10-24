import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Categore from "../../Pages/Categore/Categore/Categore";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/News/Profile/Profile";
import TermsAndCondition from "../../Pages/TermsCondi/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/news`),
      },
      {
        path: "/category/:id",
        element: <Categore></Categore>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path:"/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }                   
    ],
  },
]);
