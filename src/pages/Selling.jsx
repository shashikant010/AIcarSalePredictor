import { useState } from 'react'
import '../App.css'
import loadingGIF from '../loading.gif'
import { useNavigate } from 'react-router-dom'

function Selling() {
  const [year,setYear]=useState(null)
  const [kmDriven,SetKmDriven]=useState(null)
  const [presentPrice,setPresentPrice]=useState(null)
  const [fuelType,setFuelType]=useState(0)
  const [sellerType,setSellerType]=useState(0)
  const [transmissionType,setTransmissionType]=useState(0)
  const [loading,setLoading]=useState(false)
  const [predictedPrice,setPredictedPrice]=useState(100)
  const [error,setError]=useState("")
  const [gotResult,setGotResult]=useState(false)

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    setPredictedPrice(100)
    setError(null)
    setGotResult(false)
    
    try {
      console.log("fetching")
      const requestData = 
        {
          "Year": [year],
          "Present_Price":[presentPrice],
          "Kms_Driven":[kmDriven],
          "Fuel_Type":[fuelType],
          "Seller_Type":[sellerType],
          "Transmission":[transmissionType],
          "Owner":[0]
      }
      
      const response=await fetch('https://car-price-prediction-api.onrender.com/predict-price',{
        method:'POST',
        mode:'cors',
        cache:'no-cache',
        headers:{
          'Content-Type':'application/json'
        },
        redirect:'follow',
        referrerPolicy:'no-referrer',
        body:JSON.stringify(requestData)
      })
      const data=await response.json()
      console.log(data.predicted_price)
      setPredictedPrice(data.predicted_price[0].toFixed(2)) 
      setGotResult(true)
    } catch (error) {
      console.log(error)
      setError(error)
    }finally{
      setLoading(false)
    }
    
  }

  const retry = ()=>{
    setGotResult(false)
    setPredictedPrice(100)
    setYear(null)
    SetKmDriven(null)
    setPresentPrice(null)
    setFuelType(0)
    setSellerType(0)
    setTransmissionType(0)
    setLoading(false)
    setError(null)
  }
  return (
  <>
  {!loading&& !gotResult &&
  <main className="flex justify-center items-center w-full h-full">
    <form action="post" className="border-black rounded-2xl border-4  w-1/2 mx-auto m-4 p-4 flex flex-col  bg-white bg-opacity-70 form items-start">
        <h1 className="text-3xl font-bold text-center text-blue-800 m-2 font-serif mb-4">AI CAR SALE PRICE PREDICTOR</h1>
        <label htmlFor="year" className="text-2xl font-bold">Enter year of car</label>
        <input type="text" name="year" id="" placeholder="year" className="h-16 w-96 text-2xl p-4 border-gray-500 rounded-xl border-2 m-2"
        value={year}
        onChange={(e)=>setYear(e.target.value)}
        />
        <label htmlFor="year" className="text-2xl font-bold">Present price in lakhs</label>
        <input type="text" name="present-price" id="" placeholder="Present price" className="h-16 w-96 text-2xl p-4 border-gray-500 rounded-xl border-2 m-2"
        value={presentPrice}
        onChange={(e)=>setPresentPrice(e.target.value)}
        />
        <label htmlFor="km-driven" className="text-2xl font-bold">Enter how much your car is driven</label>
        <input type="text" name="km-driven" id="" placeholder="km driven" className="h-16 w-96 text-2xl p-4 border-gray-500 rounded-xl border-2 m-2"
        value={kmDriven}
        onChange={(e)=>SetKmDriven(e.target.value)}
        />

        <label htmlFor="fuel" className="text-2xl font-bold">Select the fuel type</label>
        <select name="fuel" id="fuel" className="h-12 w-80 m-4 font-bold text-xl border-2 border-black rounded text-green-600" 
        value={fuelType}
        onChange={(e)=>setFuelType(e.target.value)}
        >
            <option value="0" className="font-bold text-black">Petrol</option>
            <option value="1" className="font-bold text-black">Diesel</option>
            <option value="2" className="font-bold text-black">CNG</option>
        </select> 

        <label htmlFor="seller" className="text-2xl font-bold">Select the Seller type</label>
        <select name="seller" id="seller" className="h-12 w-80 m-4 font-bold text-xl border-2 border-black rounded text-purple-600"
        value={sellerType}
        onChange={(e)=>setSellerType(e.target.value)}
        >
            <option value="0" className="font-bold text-black">Dealer</option>
            <option value="1" className="font-bold text-black">Individual</option>
        </select>

        <label htmlFor="transmission" className="text-2xl font-bold">Select the transmission type</label>
        <select name="transmission" id="seller" className="h-12 w-80 m-4 font-bold text-xl border-2 border-black rounded text-purple-600"
        value={transmissionType}  
        onChange={(e)=>setTransmissionType(e.target.value)}
        >
            <option value="0" className="font-bold text-black">Manual</option>
            <option value="1" className="font-bold text-black">Automatic</option>
        </select>

        <div className="flex items-center justify-center self-center">
            <div className="relative group">
              <button
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={handleSubmit}
              >
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>
          
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1"
                      >GET YOUR CAR PRICE NOW !!</span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
          
        
    </form>
</main>}


{loading && <div className="text-5xl font-bold text-white bg-red h-screen w-screen flex justify-center items-center flex-col"><img src={loadingGIF} alt="loading.." className='w-1/3 relative -left-6' />Loading...</div>}

{gotResult &&
  <>
  <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center'>
    <div className='h-1/2 w-1/2 bg-white rounded-2xl p-4 flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold'>Yayy🥳🥳</h1>
    <h1 className='text-5xl font-bold'>Your predicted price is :</h1>
    <h1 className='text-5xl font-bold m-6 text-yellow-600'>{predictedPrice} lakh Rs</h1>
    <button className='text-white bg-lime-700 p-4 rounded-xl font-bold ' onClick={()=>navigate("/")}>
    Predict more</button>
    </div>
  </div>
  </>
  }

  {
    error && 
    //create a beautiful div to show case the predicted price
    <>
    <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center'>
      <div className='h-1/2 w-1/2 bg-white rounded-2xl p-4 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Oopes there is a error 😥</h1>
      <h1 className='text-5xl font-bold'>Error :</h1>
      <h1 className='text-xl font-bold m-6 text-red-500'>{error.toString()}</h1>
      <button className='text-white bg-red-700 p-4 rounded-xl font-bold ' onClick={retry}>Retry</button>
      </div>
    </div>
    </>
      
  }

  </>
  )
}

export default Selling
