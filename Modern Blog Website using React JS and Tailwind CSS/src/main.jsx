import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/COntact.jsx';
import Services from './pages/Services.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/services',
        element:<Services/>
      },
  
    ]
  }
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
  
)
