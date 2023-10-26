import React from 'react'
import ReactDOM from 'react-dom/client'
import SideMenu from './SideMenu.jsx'
import Content from './Content.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SideMenu />
      <Content />
  </React.StrictMode>,
)
