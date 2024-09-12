import React,{useState,useEffect} from 'react'
import './nav.css'
import netflixLogo from '../images/netflixLogo.png'
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
            return() => {
                window.removeEventListener("scroll");
            }
        });
    },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav__logo'
       src={netflixLogo}
       alt="netflix logo" />
       <div className='nav_buttons'>
       <button className='nav_button red'>Join Now</button>
       <button className='nav_button white'>Sign In</button>
       </div>
    </div>
  )
}

export default Nav
