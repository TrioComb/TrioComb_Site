import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/logo-light.png'
import { FiDribbble, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiShoppingCart, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer bg-slate-800 dark:bg-gray-900 relative text-gray-200 dark:text-gray-200">
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    <div className="lg:col-span-3 md:text-start text-center">
                        <Link to="#" className="text-[22px] focus:outline-none">
                            <img src={logo} className="mx-auto md:me-auto md:ms-0" alt=""/>
                        </Link>
                    </div>

                    <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                        <p className="mb-0">© {new Date().getFullYear()} Upcover. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                    </div>

                    <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                        <li className="inline mx-[2px]"><a href="https://1.envato.market/upcover" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiShoppingCart className="size-4 align-middle" title="Buy Now"></FiShoppingCart></a></li>
                        <li className="inline mx-[2px]"><a href="https://dribbble.com/shreethemes" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiDribbble className="size-4 align-middle" title="dribbble"></FiDribbble></a></li>
                        <li className="inline mx-[2px]"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiLinkedin className="size-4 align-middle" title="Linkedin"></FiLinkedin></a></li>
                        <li className="inline mx-[2px]"><a href="https://www.facebook.com/shreethemes" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiFacebook className="size-4 align-middle" title="facebook"/></a></li>
                        <li className="inline mx-[2px]"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiInstagram  className="size-4 align-middle" title="instagram"/></a></li>
                        <li className="inline mx-[2px]"><a href="https://twitter.com/shreethemes" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiTwitter className="size-4 align-middle" title="twitter"/></a></li>
                        <li className="inline mx-[2px]"><a href="mailto:support@shreethemes.in" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiMail className="size-4 align-middle" title="email"></FiMail></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
