import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import './datalist.scss';
import {ThreeCircles} from 'react-loader-spinner';

const DataList = () => {

    const [para, setpara] = useState("Topic")
    const [value, setvalue] = useState("")
    const [infos, setinfos] = useState([]);

    //ascending sort or not
    const [ascen, setascen] = useState(false);

  const fetchfullinfo = async ()=>{
    try{
      const {data} = await axios.get("api/datalist");
      setinfos(data);
    }catch(err){
      console.log(err.message);
    }
  }


  const fetchinfosort = async (param)=>{
    try{
        const config = {
            headers:{
                "Content-type": "application/json"
            },
        };
        const {data} = await axios.post('api/datalist/sort',{
            param: param,
            ascen: ascen,
        },config);
        console.log(data+'--------sort-data');
        setinfos(data);
    }catch(err){
        console.log(err.message);
    }
  }


  const fetchinfofilter = async ()=>{
    try{
        const config = {
            headers:{
                "Content-type": "application/json"
            },
        };
        const {data} = await axios.post('api/datalist/filter',{
            param: para,
            value: value,
        },config);
        console.log(data+'--------filter-data');
        setinfos(data);

    }catch(err){
        console.log(err.message);
    }
  }


  const handleParaChange = (e)=>{
    console.log(e.target.value+"----on parachange");
    setpara(e.target.value);
  }

  const handleValueChange = (e)=>{
    console.log(e.target.value+"----on value change");
    setvalue(e.target.value);
  }

  const handlefilter = ()=>{

    if(value=="" || para==""){
        fetchfullinfo();
    }else{
        fetchinfofilter();
    }
  };


  const handlesort = (param)=>{
    fetchinfosort(param);
    setascen(!ascen);
  }

  useEffect(()=>{
    fetchfullinfo();
  },[]);

  return (
    /*
    <>
    {console.log(infos+'hereee')}
    {infos.length !== 0 ? (
      infos.map((info)=>(
        <div key={info.title}>
          {info.intensity}
          <br/>
          {info.title}
        </div>
      ))

    ):(
      <div className=''>
        <h2>No data yet</h2>
      </div>
    )}
    </>
  */

    <div className='m-2 md:m-5 p-2 md:p-5 bg-white rounded-3xl'>
        <Header category="Page" title="Data List (Top-10)"/>
        
        {infos.length!==0 ? (
        <>
            <div className="w-auto">
                <h3 className='text-2xl pl-2 font-bold'>Filter</h3>
                <form className="flex flex-row bg-white shadow-md w-full rounded px-8 pt-4 pb-4 mb-4">
                
                    <div className="px-6">
                        <label htmlFor="parameter" className="block text-gray-700 text-sm font-bold mb-2">
                            Parameter
                        </label>
                        <select value={para} onChange={handleParaChange} className="w-40 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="parameter" id="parameter">
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Topic">Topic</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Region">Region</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Country">Country</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="End_year">End_year</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Start_year">Start_year</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Intensity">Intensity</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Likelihood">Likelihood</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Source">Source</option>
                        <option className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Pestle">Pestle</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                            Value
                        </label>
                        <input value={value} onChange={handleValueChange} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="value" type="text" placeholder="Value"></input>
                    </div>
                    <div className='px-6 pt-7'>
                        <button onClick={handlefilter} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="value" type="button" placeholder="Value">Filter</button>
                    </div>
                </form>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            S.No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Topic
                                            <button onClick={()=>handlesort("Topic")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Sector
                                            <button onClick={()=>handlesort("Sector")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Country
                                            <button onClick={()=>handlesort("Country")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Region
                                            <button onClick={()=>handlesort("Region")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Likelihood
                                            <button onClick={()=>handlesort("Likelihood")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Start Year
                                            <button onClick={()=>handlesort("Start_year")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            End Year
                                            <button onClick={()=>handlesort("End_year")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Intensity
                                            <button onClick={()=>handlesort("Intensity")} className="sort-by"/>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Pestle
                                            <button onClick={()=>handlesort("Pestle")} className="sort-by"/>
                                        </th>
                                    </tr>
                                </thead>

                                {/* loop this tbody mf*/}

                                <tbody className="divide-y divide-gray-200">
                                    {infos.slice(0,10).map((info,index)=>(
                                        <tr key={index}>
                                            {/* loop this td mf*/}
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {index+1}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.topic}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.sector.length>17 ? `${info.sector.slice(0,18)}...`:`${info.sector}`}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {info.title.length>25 ? `${info.title.slice(0,25)}...`:`${info.title}`}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.country}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.region}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.likelihood}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.start_year}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.end_year}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.intensity}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {info.pestle}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
        ):(
            <div className="items-center self-center">
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        )}
        
    </div>
  )
}

export default DataList;