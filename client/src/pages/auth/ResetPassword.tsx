import { FormEvent, useState } from "react";

const ResetPassword = () => {
    const [password,setPassword] = useState('')
    const [passwordConfirmation,setPasswordConfirmation] = useState('')
    const reset = (e:FormEvent)=>{
      e.preventDefault()
    }
    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Reset Password
            </h2>
          </div>
          <form className="mt-8" onSubmit={reset}>
            <div className="mt-2">
                <input type="password" onChange={(e)=>setPassword(e.target.value)} aria-label="Password" name="password" required className="appearance-none rounded-none relative px-3 py-3 border my-5 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:ring-primary focus:border-primary focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
            </div>
            <div className="mt-2">
                <input type="password" onChange={(e)=>setPasswordConfirmation(e.target.value)} aria-label="Password" name="password" required className="appearance-none rounded-none relative px-3 py-3 border my-5 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:ring-primary focus:border-primary focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
            </div>
            <div className="mt-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:border-primary focus:shadow-outline-primary active:bg-primary transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y pl-3">
                  <svg className="h-5 w-5 text-primary transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Confirm Password
              </button>
            </div>
          </form>
        </div>
      </div>
     );
}
 
export default ResetPassword;