import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
          <Link  to="/">
            <i className="fa fa-home"></i> Dashboard
          </Link>  
          <Link to="/">
            <i className="fa fa-users"></i> Leads
          </Link>
          <Link to="/">
            <i className="fa fa-users"></i> Campanhas
          </Link>
          <Link to="/">
            <i className="fa fa-users"></i> Vendas
          </Link>
          <Link to="/users">
            <i className="fa fa-users"></i> Clientes
          </Link>
          <Link to="/">
            <i className="fa fa-users"></i> Cobrança
          </Link>
          <Link to="/">
            <i className="fa fa-users"></i> Configurações
          </Link>
        </nav>
    </aside>