import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Home from './components/pages/Home';
import Billing from './components/pages/Billing';


const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/billing",
          element: <Billing />
        }
      ]
    }
  ])
  return (
    <div className='bg-[#061344] '>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App