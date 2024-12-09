import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '/home/larry/Development/bot-army/my-react-app/src/Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
