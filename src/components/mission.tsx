import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import blog1 from '../assets/images/blog/01.png'
import blog2 from '../assets/images/blog/02.png'
import blog3 from '../assets/images/blog/03.png'

export default function Mission() {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <section className="relative md:py-24 py-16" id="mission">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">Our Company Mission</h3>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Comb Inc. connects talented international engineers with U.S. professionals facing financial hardship or life disruptions.
            Our mission is to create fair, flexible, and supportive career opportunities for both groups, ensuring meaningful work and equal compensation—wherever they are in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-6">
          <div className="overflow-x-auto">
            <ul className="flex flex-row gap-4 p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md" role="tablist">
              <li role="presentation">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`min-w-[250px] px-4 py-2 text-start text-base font-medium rounded-md hover:text-teal-500 duration-500 ${
                    activeTab === 1 ? 'text-white bg-teal-500 hover:text-white' : ''
                  }`}
                >
                  <span className="block">MISSION 1</span>
                  <span className="text-lg mt-2 block">Empowering Communities and Professionals</span>
                </button>
              </li>
              <li role="presentation">
                <button
                  onClick={() => setActiveTab(2)}
                  className={`min-w-[250px] px-4 py-2 text-start text-base font-medium rounded-md hover:text-teal-500 duration-500 ${
                    activeTab === 2 ? 'text-white bg-teal-500 hover:text-white' : ''
                  }`}
                >
                  <span className="block">MISSION 2</span>
                  <span className="text-lg mt-2 block">Support Global Engineers Through Opportunity</span>
                </button>
              </li>
              <li role="presentation">
                <button
                  onClick={() => setActiveTab(3)}
                  className={`min-w-[250px] px-4 py-2 text-start text-base font-medium rounded-md hover:text-teal-500 duration-500 ${
                    activeTab === 3 ? 'text-white bg-teal-500 hover:text-white' : ''
                  }`}
                >
                  <span className="block">MISSION 3</span>
                  <span className="text-lg mt-2 block">Equal Work, Equal Pay Across The World</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <Swiper
              className="w-full"
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              onSlideChange={(swiper) => setActiveTab(swiper.realIndex + 1)}
              initialSlide={activeTab - 1}
            >
              <SwiperSlide>
                <div className="w-full p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                  <img src={blog1} className="w-full shadow-sm dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Empowering Clients and Professionals</h5>
                    <p className="text-slate-400 mt-4">
                      We support U.S.-based individuals experiencing life transitions by connecting them with top global talent for mutual success.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                  <img src={blog2} className="w-full shadow-sm dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Support Global Engineers Through Opportunity</h5>
                    <p className="text-slate-400 mt-4">
                      Our platform enables engineers worldwide to access U.S. job markets, offering career continuity during life's uncertainties.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                  <img src={blog3} className="w-full shadow-sm dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Equal Work, Equal Pay Across The World</h5>
                    <p className="text-slate-400 mt-4">
                      We ensure global engineers are fairly compensated at U.S. standards, based on experience—not location.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
