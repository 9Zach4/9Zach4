
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


function App() {
  return (
    <div className="App">
      
        <p>sisi la famille </p>
        <>
			<RouterProvider router={router}/>
		</>


        
    </div>
  );
}

export default App;


