import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartProvider.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>

  <Auth0Provider
    domain="dev-vwej160uu55axhgf.us.auth0.com"
    clientId="KED3hSMZAtmeCc7iULBa8jVSkJ0IYd5y"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
  </CartProvider>
  </BrowserRouter>

)
