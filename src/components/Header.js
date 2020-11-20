import React from 'react'

const Header = (props) => {
  const { title } = props;
  return(
    // <div> <h1 style={{ color: 'black'}}></h1> {title} </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-title" style={{ color: 'black'}} >
          {title}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Header;
