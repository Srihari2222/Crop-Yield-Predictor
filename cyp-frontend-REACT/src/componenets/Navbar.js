import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useEffect } from 'react'

export default function Navbar(props) {
    const location = useLocation();
    const isActive = (pathname) => {
        return location.pathname === pathname;
    };
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className=" navbar fixed-top navbar-expand-lg " style={{ backgroundColor: `${(window.innerWidth<1000?"#050816":(scrolled?"#050816":"transparent"))}`}}>
            <div className="container-fluid">
                
                <a className="navbar-brand mb-0 h1" href="/" style={{marginLeft:`${window.innerWidth<300?"1px":"10px"}`,color:"white"}}>Crop Yield Predictor</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{color:"white"}} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle pb-0 mr-3 " style={{color:"white",border:"none"}} data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu dropdown-menu" style={{backgroundColor:"#050816"}}>
                        <li><a onMouseOver={(e) => (e.target.style.backgroundColor = 'darkcyan')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')} style={{color:"white"}} className="dropdown-item" href="/">Action</a></li>
                        <li><a onMouseOver={(e) => (e.target.style.backgroundColor = 'darkcyan')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')} style={{color:"white"}} className="dropdown-item" href="/">Another action</a></li>
                        <li><a onMouseOver={(e) => (e.target.style.backgroundColor = 'darkcyan')} onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')} style={{color:"white"}} className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                    </li> */}
                    <li className="nav-item">
                    <Link style={{color:"white"}} className={`nav-link me-3 pl-3 ${isActive('/') ? 'active' : ''}`} aria-current="page" to="/" replace={true}>&nbsp;&nbsp;Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link  style={{color:"white"}} className={`nav-link me-5 pl-3 ${isActive('/about') ? 'active' : ''}`} aria-current="page" to="/about">&nbsp;&nbsp;About</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}    
