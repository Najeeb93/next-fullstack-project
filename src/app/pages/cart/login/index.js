import { Input } from "postcss";



function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div style={{height:"90vh", backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize:"cover"}}
        className="flex justify-center items-center">
            <div className="container w-full max-w-md">
              <form onSubmit={handleSubmit}
              className="bg-grey-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-sm font-bold mb-2">
                    Username
                    </label>
                    <input name="email" type="text" 
                      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                      />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-sm font-bold mb-2">
                    Username
                    </label>
                    <input name="email" type="text" 
                      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                      />
                </div>
                </form>  
            </div>
        </div>
    )
}

export default Login;