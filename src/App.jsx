import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate= useNavigate()
  return (
  <>

  <div className='h-screen w-screen  absolute top-0 left-0 flex justify-center items-center'>
    <div className='bg-white bg-opacity-35 w-1/2 h-1/2 rounded-lg shadow-3xl shadow-white p-3'> 
    <h1 className='text-3xl font-bold mt-14'>What you want to predict today ? !!</h1>
    <div className='flex justify-around items-center h-1/2'>
      <div className='text-2xl h-10 bg-green-600 w-1/4 rounded-lg font-semibold text-center'
      onClick={() => navigate("/selling-price")}>Selling price</div>
      <div className='text-2xl h-10 bg-orange-600 w-1/4 rounded-lg font-semibold text-center' onClick={() => navigate("/km")}>Km Driven</div>
      <div className='text-2xl h-10 bg-purple-600 w-1/4 roundedkm-lg font-semibold text-center'
       onClick={() => navigate("/year")}>Year of car</div>
    </div>

    </div>
  </div>

    
  </>
  )
}

export default App
