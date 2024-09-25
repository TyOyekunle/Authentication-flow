import React from 'react'
import Backprompt from '../../src/assets/Backprompt.png';
import company_signupimage from '../../src/assets/signupimage_company.png';


const CompanyKYC = () => {
  return (
    <div class="min-h-screen py-40">
      
      <div class="container mx-auto">
        <div class="flex w-8/12" >
    <div>
    <img src={company_signupimage} alt="" />
    </div>

    <div>
    <div>
        <img src= {Backprompt} alt="" />
      </div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default CompanyKYC
