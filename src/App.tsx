import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import {router} from './routes/index';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" toastOptions={{
          style: {
            fontSize: '14px'
          },
        }} />
    </>
  );
}

export default App;
