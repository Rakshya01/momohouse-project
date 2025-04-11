import React from 'react'
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { NavLink, useLocation } from 'react-router-dom';


function Payment() {
    let transaction_uuid= uuidv4();
    console.log(transaction_uuid);

    

    const location = useLocation();
    console.log(location.state.totalPrice);
    let total_amount=location.state.totalPrice;

    let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

    var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return (
    <div className='pt-32'>
        <div>
 <form
 
 className='shadow-2xl shadow-gray-800 w-96 p-5 m-auto flex space-y-5 flex-col items-center  rounded-2xl'
 action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
 <input type="hidden" id="amount" name="amount" value={total_amount} required/>
 <input type="hidden" id="tax_amount" name="tax_amount" value ="0" required />
 <input type="hidden" id="total_amount" name="total_amount" value={total_amount} required />
 <input  className='w-full' type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required />
 <input type="hidden" id="product_code" name="product_code" value ="EPAYTEST" required />
 <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
 <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
 <input className='w-full' type="hidden" id="success_url" name="success_url" value="https://momohouse-project-6xfu.vercel.app/success" required />
 <input className='w-full' type="hidden" id="failure_url" name="failure_url" value="https://momohouse-project-6xfu.vercel.app/failure" required />
 <input className='w-full' type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
 <input className='w-full' type="hidden" id="signature" name="signature" value={hashInBase64 } required />
 <p > Total Price:{total_amount}</p>
 <input className='text-white bg-green-700 p-2 py-3 w-40' value="Submit" type="submit"/>

 <NavLink to='/menu' className='text-white text-center py-3  bg-red-700 p-2 w-40'>Cancel</NavLink>
 </form>
</div>
  
    </div>
  )
}

export default Payment
