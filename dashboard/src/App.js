import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar} from './components';
import {DataList, Highlights, Area, Bar, Line, Pie, Stacked} from './pages';



const App = () => {
    
  const [activeMenu,setactiveMenu] = useState(true);

  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                
                {/*<div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent
                        content="Settings" position='Top'
                    >
                        <button 
                        type='button' 
                        className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                        style={{background:'blue', borderRadius:'50%'}}
                        >
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>*/}
                

                {activeMenu ? (
                    <div className='w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar activeMenu={activeMenu} setactiveMenu={setactiveMenu}/>
                    </div>
                ):(
                    <div className='w-12 dark:bg-secondary-dark-bg'>
                        <Sidebar activeMenu={activeMenu} setactiveMenu={setactiveMenu}/>
                    </div>
                )}


                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-60 pl-5':'flex-2'
                }`}>
                    <div>
                        <Routes>
                            {/*dashboard */}
                            <Route path="/" element={<DataList/>}/>

                            {/* Highlights Info */}
                            <Route path="/highlights" element={<Highlights/>}/>
                            
                            {/*charts*/}
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/area" element={<Area/>}/>
                            <Route path="/bar" element={<Bar/>}/>
                            <Route path="/pie" element={<Pie/>}/>
                            <Route path="/Stacked" element={<Stacked/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>

)
}

export default App;