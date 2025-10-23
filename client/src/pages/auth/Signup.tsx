import { useDispatch } from "react-redux";
import { signUp } from '../../redux/slices/authSlice';
import { AppDispatch } from "../../redux/store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),   
  password: z.string().min(6, "Password must be at least 6 characters long"),
  passwordConfirmation: z.string().min(6, "Password confirmation must be at least 6 characters long"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
});

type SignupFields = z.infer<typeof signupSchema>;

const Signup = () => {
    const { register, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<SignupFields>({
      defaultValues: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      resolver: zodResolver(signupSchema)
    })

    const dispatch = useDispatch<AppDispatch>();
    const onSubmit = async (data: SignupFields) => {
      try {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          dispatch(signUp({name:data.name,email:data.email,password:data.password,passwordConfirmation: data.passwordConfirmation})); 
      } catch (error) {
          setError("root", { type: "manual", message: "Invalid email or password" });
      }
    }

    return ( 
        <div className="h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-5 rounded-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
              Already Have an Account?
              <a href='/auth/login' className="text-primary font-medium focus:outline-none focus:underline transition ease-in-out duration-150">
                Sign in
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div>
              {errors.root && <span className="text-sm text-red-500">{errors.root.message}</span>}
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input {...register('name')} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" type="text" placeholder="Jane" name="name" required/>
                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email address
                </label>
                <input type="email" {...register('email')} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" placeholder="example@example.com" name="email" required/>
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input {...register('password')} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" type="password" placeholder="******************" required/>
                {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password Confirmation
                </label>
                <input {...register('passwordConfirmation')} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" type="password" placeholder="******************" required/>
                {errors.passwordConfirmation && <span className="text-sm text-red-500">{errors.passwordConfirmation.message}</span>}
              </div>
            </div>
            <div className="my-6">
              <button disabled={isSubmitting} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y pl-3">
                  <svg className="h-5 w-5 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {isSubmitting ? 'Signing up...' : 'Sign up' }
              </button>
            </div>
          </form>
        </div>
      </div>   
  );
}
 
export default Signup;