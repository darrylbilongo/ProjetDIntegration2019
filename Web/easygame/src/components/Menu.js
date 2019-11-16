import React from 'react';


class Menu extends React.Component {
  render(){
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="/home" className="brand-link">
            {/*<img src="src/Logo/logo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />*/}
            <span className="brand-text font-weight-light">Easy Game</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/avatar3.jpg" className="img-circle elevation-2" alt="User" />
              </div>
              <div className="info">
                <Link to="#" className="d-block"></Link>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>        
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
          </aside>

    );
  }
}

export default Menu;
 