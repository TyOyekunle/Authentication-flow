import React from 'react';
import company_signupimage from '../../src/assets/signupimage_company.png';

const CompanySignup = () => {
  return (
    <div class="container mx-auto" >
      <div class="flex w-full bg-white mx-auto shadow-lg overflow-hidden">

        <div class="w-1/2">
          <img src={company_signupimage} alt="" class="h-25"/>
        </div>

        <div class="w-1/2 py-16 px-12 bg-gray rounded-xl">
          <p class=" text-right" >Already have an account? <span class="text-green-500">Sign in</span> </p>
          <h2 class="text-3xl mb-4 ">Create Account </h2>
          <p class="mb-2 ">
            Please enter your details below</p>
          <form action='#'>
            <div>
              <label> Name</label>  <br/> 
<input type="text" placeholder='Enter name here' class="border border-gray-400 py-1 px-2 w-full"
                required />
            </div>

            <div class="mt-5">
              <label> Email </label> <br/> 
<input type="text" placeholder='Enter email' class="border border-gray-400 py-1 px-2 w-full"
                required />
            </div>

            <div class="mt-5">
              <label> Password </label>
              <input  type="password" placeholder='Enter password'class="border border-gray-400 py-1 px-2 w-full"
                required />
              {/* <p>password should have at least 1 upper case letter, a lower case <br />
                letter, a number and special character</p> */}
            </div>
            <div class="mt-5">
              <label> Confirm Password </label>
              <input type="password" placeholder='Enter password'
                required />

              <p>By signing up, you agree to the <span class="text-green-500"> Terms and Condition </span></p>
            </div>
            <br />

            <button type='submit'  class="text-white-500 border border-gray-400 py-1 px-2 w-full bg-green-500 rounded-lg"> Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CompanySignup
