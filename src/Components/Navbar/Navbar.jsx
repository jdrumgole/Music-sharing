import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
          <div className='nav-logo'>Music Share</div>
          <ul className='nav-menu'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Explore</a>
              </li>
               <li>
                <a href='/'>About</a>
              </li>
              <li className='nav-contact'>
                <a href='/'> Login </a>
              </li>
          </ul>
    </div>
  )
}

export default Navbar