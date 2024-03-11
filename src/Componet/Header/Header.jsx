import React, {useState} from 'react'
import './Header.scss'
import logo from '../../Assets/logo.png'
import { Link } from 'react-scroll'

function Header() {

  let [nav, setNav] = useState(false)

  let changeBG = ()=>{
    if(window.scrollY >= 50){
      setNav(true)
    }
    else{
      setNav(false)
    }
  }
  window.addEventListener('scroll', changeBG)

  return (
    <div className={nav ? 'headerActive' : 'Header'}>
      <div className="logo">
        <Link to='hero' smooth ={true} duration={1000}><img src={logo}/></Link>

      </div>
      <div className="header-list">
            <Link to='hero' className='item' smooth ={true} duration ={1000} >Home</Link>
            <Link to='feature' className='item' smooth = {true} duration={1000}>Feature</Link>
            <Link to='offer' className='item' smooth ={true} duration={1000}>Offer</Link>
            <Link to='about' className='item' smooth ={true} duration={1000}>About</Link>
            <Link to='contact' className='item' smooth ={true} duration={1000}>Contact</Link>
      </div>
    </div>
  )
}

export default Header