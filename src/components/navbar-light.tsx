import React, { useCallback, useEffect, useState } from 'react'
import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import { Link } from 'gatsby'
import {Link as Link1} from 'react-scroll'

export default function NavbarLight() {
    const [scroll, setScroll] = useState<boolean>(false)
    let [menu, setMenu] = useState<Boolean>(false);

    const handleScroll = useCallback(() => {
        if (typeof window !== 'undefined'){
            setScroll(window.scrollY > 50);
        }
      }, []);

    useEffect(() => {
        window.scrollTo(0,0)
        if (typeof window !== 'undefined'){

            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
        
    }, [handleScroll]);
  return (
        <nav className={`navbar ${scroll ? 'is-sticky' : ''}`} id="navbar">
            <div className="container relative flex flex-wrap items-center justify-between">
                <Link className="navbar-brand md:me-8" to="/">
                    <span className="inline-block dark:hidden">
                        <img src={logoDark} className="l-dark" alt=""/>
                        <img src={logoLight} className="l-light" alt=""/>
                    </span>
                    <img src={logoLight} className="hidden dark:inline-block" alt=""/>
                </Link>

                <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                    <ul className="list-none menu-social mb-0">
                        <li className="inline">
                            <Link to="" className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white uppercase">Login</Link>
                        </li>
                    </ul>
                    <button onClick={(e)=>{e.preventDefault(); setMenu(!menu)}} data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false">
                        <span className="sr-only">Navigation Menu</span>
                        <i className="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                <div className={`navigation lg_992:order-1 lg_992:flex !mx-auto ${menu ? '' : 'hidden'}`} id="menu-collapse">
                    <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
                        <li className="nav-item">
                            <Link1 className="nav-link cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500} to="home">Home</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500} to="services">Services</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500} to="review">Testimonial</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500} to="pricing">Pricing</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500} to="blog">Blogs</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500} to="contact">Contact us</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
