import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference}) {
  return (
    <motion.div  drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-8  m-8 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='mt-5 text-[15px] font-semibold leading-tight '>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full h-10 left-0  mb-6 '> 
            <div className='flex items-center justify-between  px-3 mb-1 '>
               <h5>{data.filesize}</h5>
               <span className='h-5 w-5 rounded-full bg-slate-500 flex justify-center items-center p-1 cursor-pointer'>
                  {data.close ? <IoClose /> : <FiDownload color='#000'/> }
               </span>
            </div>
            {
              data.tag.isOpen && ( 
                <div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center cursor-pointer `}>
                    <h3 className='cursor-pointer'>{data.tagTitle}</h3> 
                </div>
              )}
           
        </div>
        {/* icon, text, footer, deta, tag,  */}

    </motion.div>
  )
}

export default Card