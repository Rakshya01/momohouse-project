import React from 'react'
import chef from "../assets/chef0.png"

function AllergyAdvice() {
  return (
    <>
    <div className='flex justify-between p-30'>
<div className=''>

  <h1 className='text-[56px] text-[#0C6967]'>Allergy Advices</h1>
  <p className='text-[24px] font-light mt-5'>AT OUR RESTAURANT</p>
  <p className='font-bold text-[31px] w-[576px] mt-5'>We use only the freshest and highest quality ingredients in all our dishes, 
 <span className='text-[#D95103]'>and offer transparency in our ingredient labeling.</span> </p>
  </div>   
  <div>
    <img src={chef} alt=""/>
  </div>
  
  
   </div>
   </>
  )
}

export default AllergyAdvice
