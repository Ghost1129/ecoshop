import React from 'react'
import './Navbar.sass'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='navbar'>
            <div className="navbartop">
                <div className="navbarleft">
                <img className='hammenu' width={'25px'} src="https://img.icons8.com/ios/344/circled-menu.png" alt="" />
                <div className="logo">
                
                <span>ECOSHOP
                <img className='logo_i' width={'30px'} src="https://img.icons8.com/clouds/344/menu.png" alt="" />
                </span>
                </div>
                </div>
                <div className="navbarright">
                <img className='user' width={'30px'} src="https://img.icons8.com/ios/344/gender-neutral-user.png" alt="" />
                <img className='cart' width={'30px'} src="https://img.icons8.com/dotty/344/shopping-cart.png" alt="" />
                </div>
            </div>
            <div className="navbarbottom">
                <div className="search">
                <input type="text" placeholder="Search" />
                <span>
                    <img className='search_i' width={'18px'} src="https://img.icons8.com/ios/344/search.png" alt="" />
                </span>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Navbar