import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
        <div className='container'>
            <div className='row'>
                <div className='home-header'>
                <div className='nav-left'><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />  COURSE</div>
                <div className='nav-middle'>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link to='/admin'>ADMiN</Link>
                        </li>
                        <li>
                            <Link>COURSES</Link>
                        </li>
                        <li>
                            <Link to='/basket'>BASKET</Link>
                        </li>
                        <li>
                            <Link>NEWS</Link>
                        </li>
                        <li>
                            <Link>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" />
                    <span>+43 4566 7788 2457</span>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Header