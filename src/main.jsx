import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <div className='max-w-5xl mx-auto'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>,
  </div>
)
