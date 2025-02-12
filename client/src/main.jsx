import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'leaflet/dist/leaflet.css'
import { Provider } from 'react-redux'
import store from './redux/store'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'antd/dist/reset.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  </Provider>
  ,
)