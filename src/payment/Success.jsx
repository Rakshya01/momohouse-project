import React from 'react'
import { useSearchParams } from 'react-router-dom';


function Success() {

  const [searchParams] = useSearchParams()
      let val = searchParams.get("data");
      console.log(val);


      let info = atob(val);
      info= JSON.parse(info);
      console.log(info);


  return (
    <div className='pt-20'>
      <div className='shadow-2xl space-y-2 shadow-gray-400 w-96 m-auto mt-5 flex flex-col items-center p-5'>

    <img className='h-44' src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"/>


    <div>
      <h1>Status: <span className='underline bg-green-300'>{info?.status}</span></h1>
      <h1>Total Amount: Rs.<span className='underline bg-green-300'>{info?.total_amount}
        </span></h1>
        <h1>Transaction Code: <span className='underline bg-green-300'>{info?.transaction_code}</span></h1>
    </div>

      </div>

     
    </div>
  )
}

export default Success
