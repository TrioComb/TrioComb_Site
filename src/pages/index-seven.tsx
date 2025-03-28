import React from 'react'

import Layout from '../components/layout'
import NavbarLight from '../components/navbar-light'
import About from '../components/about';
import Services from '../components/services';
import Tab from '../components/tab';
import Cta from '../components/cta';
import Client from '../components/client';
import Pricing from '../components/pricing';
import Blog from '../components/blog';
import Contact from '../components/contact';
import Footer from '../components/footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';

import favIcon from '../assets/images/favicon.ico'

export default function IndexSeven() {
  return (
    <Layout>
      <NavbarLight/>

      <section className="swiper-slider-hero relative block h-screen" id="home">
        <div className="swiper swiper-container absolute end-0 top-0 w-full h-full">
            <Swiper className="swiper-wrapper"

              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={2000}
              loop={true}
            >
                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-[url('../../assets/images/bg/1.jpg')] bg-center;">
                        <div className="absolute inset-0 bg-slate-900/70"></div>
                        <div className="container relative">
                            <div className="grid grid-cols-1">
                                <div className="">
                                    <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Connect with <br/> customers smartly</h1>
                                    <p className="text-white/70 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                    
                                    <div className="mt-6">
                                        <a href="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </SwiperSlide> 

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center  bg-[url('../../assets/images/bg/2.jpg')] bg-center;">
                        <div className="absolute inset-0 bg-slate-900/70"></div>
                        <div className="container relative">
                            <div className="grid grid-cols-1">
                                <div className="">
                                    <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Get all the <br/> inspirations for your business</h1>
                                    <p className="text-white/70 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                    
                                    <div className="mt-6">
                                        <a href="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </SwiperSlide>
            </Swiper>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-next bg-transparent !size-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-teal-500 rounded-full text-center"></div>
            <div className="swiper-button-prev bg-transparent !size-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-teal-500 rounded-full text-center"></div>
        </div>
    </section>
    <About/>
    <Services/>
    <Tab/>
    <Cta/>
    <Client/>
    <Pricing/>
    <Blog/>
    <Contact/>
    <Footer/>
    </Layout>
  )
}


export function Head(){
    return(
      <>
        <html lang="en" className="light scroll-smooth" dir="ltr"/>
        <body className="font-libre-franklin text-slate-900 dark:text-white dark:bg-slate-900"/>
        <title>Upcover - Gatsby Business Landing Page Template</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        <link href={favIcon} rel="shortcut icon"></link>
      </>
    )
  }

