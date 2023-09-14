

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-blue-500 mt-5">Login Form</h1>
        <form className=" shadow-md m-4 p-4 flex flex-col justify-center items-center w-[500px] mt-5">
            <input type="email" placeholder="Enter email" className="p-3 w-full outline-none focus:outline-lime-500 mt-4 rounded-md" />
            <input type="password" placeholder="Enter password" className="p-3 w-full outline-none focus:outline-lime-500 mt-4 rounded-md" />
            
            <button className="mt-4 rounded-md w-24 h-14 bg-blue-500 text-white border-none hover:bg-green-500">Login</button>
        </form>
    </div>
  )
}

export default Login