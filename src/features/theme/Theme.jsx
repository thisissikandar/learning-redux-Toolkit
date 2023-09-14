import { useState } from "react"
import { useDispatch, } from 'react-redux';
import { theme } from "./themeSlice";

const Theme = () => {
    const [color, setColor] = useState("red")
    // const setTheme = useSelector((state)=> state.theme.color)
    const dispatch = useDispatch()
  return (
    <div className=" mt-4 ">
        <input type="text" className="border-blue-500" onChange={(e)=> setColor(e.target.value)} />
            <button onClick={()=>{dispatch(theme(color))}}>setColorByText</button>
        <h1 className='text-3xl'>{color}</h1>
    </div>
  )
}

export default Theme