import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

export default function Switcher() {
    
    const [htmlTag, setHtmlTag] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Access the document only in the browser
        if (typeof document !== "undefined") {
          setHtmlTag(document.getElementsByTagName("html")[0]);
        }
      }, []);
    
      const changeTheme = (e:any) => {
        e.preventDefault();
        if (htmlTag) {
          if (htmlTag.className.includes("dark")) {
            htmlTag.className = "light";
          } else {
            htmlTag.className = "dark";
          }
        }
      };

      const modeChange = (e: React.MouseEvent) => {
        e.preventDefault();
        if (htmlTag) {
          const switcherRtl = document.getElementById("switchRtl");
          if (switcherRtl && switcherRtl.innerText === "LTR") {
            htmlTag.dir = "ltr";
          } else {
            htmlTag.dir = "rtl";
          }
        }
      };
  return (
    <>

        <div className="fixed top-1/4 -right-2 z-3">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={(e)=>changeTheme(e)}/>
                <label className="label bg-slate-900 dark:bg-white shadow-sm dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                    <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>

        <div className="fixed top-[40%] -right-3 z-50">
            <Link to="" id="switchRtl" onClick={(e)=>modeChange(e)}>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </Link>
        </div>
    </>
  )
}

export function Head(){
  return(
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
    </>
  )
}