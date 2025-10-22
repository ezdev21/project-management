import { Button } from "@/components/ui/button.js";

const Home = () => {
    return ( 
        <div style={{backgroundImage: "url('home.jpg')", height: "100vh", backgroundSize: "cover", backgroundColor: "rgba(0, 0, 0, 0.6)", backgroundBlendMode: "darken"}}>
          <header>
            <nav>
              <ul className="flex justify-end p-10 space-x-4">
                <li className="hover:bg-transparent">
                  <a href="/auth/login" className="text-primary border-2 border-primary rounded-md py-2 px-5">Login</a>
                </li>
                <li>
                  <a href="/auth/signup" className="bg-primary text-white rounded-md py-2 px-5">Signup</a>
                </li>  
              </ul>  
            </nav>  
          </header>  
          <main>
            <div>
              <h1 className="text-white text-5xl font-bold text-center mt-40">Welcome to ERP System</h1>
            </div>
          </main>
        </div>
     );
}

export default Home;
