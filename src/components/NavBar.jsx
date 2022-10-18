import logo from '../images/airbnb-logo.png'


function NavBar() {
  return (
       <nav>
          <img src={logo} alt=""  className='nav--logo'/>
       </nav>
  )
}

export default NavBar