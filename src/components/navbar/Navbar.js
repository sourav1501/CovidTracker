import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className='navbar'>
        <div className="area"></div><nav className="main-menu">
        <div className='maincovid'>
                <a href="#">COVID19<span>INDIA</span></a>
            </div>
        <ul className='main-menuul'>
  
            <li>
                <a href="#">
                    <i className="fa fa-home fa-2x"></i>
                    <span className="nav-text">
                        Home
                    </span>
                </a>
              
            </li>
            <li className="has-subnav">
                <a href="#">
                    {/* <i className="fa fa-laptop fa-2x"></i> */}
                    <i className="fa fa-user"></i>


                    <span className="nav-text">
                       Demographics
                    </span>
                </a>
                
            </li>
            <li className="has-subnav">
                <a href="#">
                   <i className="fa fa-list fa-2x"></i>
                    <span className="nav-text">
                        Deep Dive
                    </span>
                </a>
                
            </li>
            <li className="has-subnav">
                <a href="#">
                   <i className="fa fa-cube "></i>
                   {/* <i class="fas fa-cube"></i> */}


                    <span className="nav-text">
                        Essentials
                    </span>
                </a>
               
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-question-circle"></i>
                    {/* <i class="far fa-question-circle"></i> */}


                    <span className="nav-text">
                        FAQ
                    </span>
                </a>
            </li>
            <li>
                
                <h5 className='nav-h'>A crowdsourced initiative.</h5>

            </li>
            
        </ul>
        <ul class="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-moon"></i>
                       
                         
                    </a>
                </li>  
            </ul>
    </nav>
    </div>
    
  
    )
}