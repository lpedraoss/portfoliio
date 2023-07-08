import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ScrollProvider from './utils/context/scroll_provider.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>



  </React.StrictMode>,
)

