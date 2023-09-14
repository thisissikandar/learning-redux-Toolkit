

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-blue-500 mt-5">Register Form</h1>
        <form className="p-4 flex flex-col justify-center items-center w-[500px] mt-5 shadow-md">
            <input type="text" placeholder="Enter Name" className="p-4 w-full outline-none border-none mt-4 rounded-md focus:outline-green-500 " />
            <input type="email" placeholder="Enter email" className="p-4 w-full outline-none border-none mt-4 rounded-md focus:outline-green-500 " />
            <input type="password" placeholder="Enter password" className="p-4 w-full outline-none border-none mt-4 rounded-md focus:outline-green-500 " />
            <input type="password" placeholder="re-Enter password" className="p-4 w-full outline-none border-none mt-4 rounded-md focus:outline-green-500 " />
            <button className="mt-4 rounded-md w-24 h-14 bg-blue-500 text-white border-none hover:bg-green-500">Submit</button>
        </form>
    </div>
  )
}

export default Register