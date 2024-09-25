import React from 'react'
import Backprompt from '../../src/assets/Backprompt.png';
import company_signupimage from '../../src/assets/signupimage_company.png';


const CompanyVerification = () => {
  return (
    <div className="flex w-full h-screen">
  <div>
        <img src= {company_signupimage} alt="" />
      </div>

      <div>

        <div>
        <img src= {Backprompt} alt="" />
      </div>
      <div>
        <img src="" alt="" class="h-30 w-30" />

        <div>
            <h2>Verify your Email</h2>
            <p>Please enter the 5 digit code sent to your email address</p>
       <div>
       <div >
        <input type="number" class="border border-gray-400 py-1 px-2 w-1px" />
       </div>
       <div >
        <input type="number" />
       </div>
       <div >
        <input type="number" />
       </div>
       <div >
        <input type="number" />
       </div>
       <div >
        <input type="number" />
       </div>
       </div>
       
       <p>Didn't receive code? <span>Resend code</span></p>
       <button>Sign Up</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CompanyVerification
