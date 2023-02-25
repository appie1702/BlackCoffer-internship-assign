import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {AiOutlineMenu} from 'react-icons/ai';
const Sidebar = ({activeMenu,setactiveMenu}) => {

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white bg-secondary-dark-bg text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10'
    >
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={()=>{}} className="items-center gap-3 ml-3
            mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              ARPIT
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type='button' onClick={()=>setactiveMenu(!activeMenu)}  
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10'>
            <div>
              <NavLink 
                to='/'
                onClick={()=>{}}
                className={({isActive})=> isActive ? 
                "uppercase flex items-center pl-2 pt-3 pb-2.5 rounded-lg  text-white bg-secondary-dark-bg text-md m-2"
                :
                "flex text-gray-700 gap-5 pl-2 pt-3 pb-2.5 mt-4 ml-1 uppercase"}
              >
                Data List
              </NavLink>

              <NavLink 
                to='/highlights'
                onClick={()=>{}}
                className={({isActive})=> isActive ? 
                "uppercase flex items-center pl-2 pt-3 pb-2.5 rounded-lg  text-white bg-secondary-dark-bg text-md m-2"
                :
                "flex text-gray-700 gap-5 pl-2 pt-3 pb-2.5 mt-2 uppercase ml-1"}
              >
                Highlights
              </NavLink>
            </div>
            
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">Charts</p>
              <NavLink 
                to='/line'
                onClick={()=>{}}
                className={({isActive})=> isActive ? activeLink:normalLink}
              >
                Line
              </NavLink>
              <NavLink 
                to='/area'
                onClick={()=>{}}
                className={({isActive})=> isActive ? activeLink:normalLink}
              >
                Area
              </NavLink>
              <NavLink 
                to='/bar'
                onClick={()=>{}}
                className={({isActive})=> isActive ? activeLink:normalLink}
              >
                Bar
              </NavLink>
              <NavLink 
                to='/pie'
                onClick={()=>{}}
                className={({isActive})=> isActive ? activeLink:normalLink}
              >
                Pie
              </NavLink>
            </div>
          </div>
        </>
      )}
      {!activeMenu && (
        <div className='pt-5'>
          <AiOutlineMenu size={30} onClick={()=>setactiveMenu(!activeMenu)}/>
        </div>
      )}
    </div>
  )
}

export default Sidebar