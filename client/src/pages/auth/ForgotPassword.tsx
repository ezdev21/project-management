import { FormEvent, useState } from "react";

const ForgotPassword = () => {
    const [email,setEmail] = useState('')
    const requestPassword = (e:FormEvent)=>{
        e.preventDefault() 
    }
    return ( 
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-5 rounded-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Send Password Reset Link
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
              Already Have an Account?
              <a href="/auth/login" className="font-medium text-primary focus:outline-none focus:underline transition ease-in-out duration-150">Sign in</a>
            </p>
          </div>
          <form className="mt-8" onSubmit={requestPassword}>
            <div className="rounded-md shadow-sm">
              <div>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} aria-label="Email address" name="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
              </div>
            </div>
    
            <div className="mt-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:border-primary focus:shadow-outline-primary active:bg-primary transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y pl-3">
                  <svg className="h-5 w-5 text-primary transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
     );
}
 
export default ForgotPassword;