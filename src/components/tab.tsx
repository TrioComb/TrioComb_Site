import React, { useState, useEffect } from 'react'
import blog1 from '../assets/images/blog/01.png'
import blog2 from '../assets/images/blog/02.png'
import blog3 from '../assets/images/blog/03.png'

export default function Tab() {
  const [activeTab, setActiveTab] = useState<number>(1)

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev % 3) + 1) // Cycle 1 -> 2 -> 3 -> 1
    }, 5000) // every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Manual override resets interval
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        {/* Header */}
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">Our Company Mission</h3>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Comb Inc. connects talented international engineers with U.S. professionals facing financial hardship or life disruptions.
            Our mission is to create fair, flexible, and supportive career opportunities for both groups, ensuring meaningful work and equal compensation—wherever they are in the world.
          </p>
        </div>

        {/* Tab Section */}
        <div className="grid grid-cols-1 mt-6 gap-6">
          {/* Horizontal Tabs */}
          <div className="overflow-x-auto">
            <ul className="flex flex-row gap-4 p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md" role="tablist">
              <li role="presentation">
                <button
                  onClick={() => handleTabClick(1)}
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
                  onClick={() => handleTabClick(2)}
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
                  onClick={() => handleTabClick(3)}
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

          {/* Tab Content */}
          <div>
            <div className="w-full p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md transition-all duration-500 ease-in-out">
              {activeTab === 1 && (
                <div>
                  <img src={blog1} className="w-full shadow-sm dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Empowering Clients and Professionals</h5>
                    <p className="text-slate-400 mt-4">
                      We support U.S.-based individuals experiencing life transitions by connecting them with top global talent for mutual success.
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <img src={blog2} className="w-full shadow-sm dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Support Global Engineers Through Opportunity</h5>
                    <p className="text-slate-400 mt-4">
                      Our platform enables engineers worldwide to access U.S. job markets, offering career continuity during life’s uncertainties.
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <img src={blog3} className="w-full shadow-sm dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Equal Work, Equal Pay Across The World</h5>
                    <p className="text-slate-400 mt-4">
                      We ensure global engineers are fairly compensated at U.S. standards, based on experience—not location.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
