import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice"


const Count= () => {
    const textCount = useSelector((state)=>state.counter.count)
    const textColor = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()
  return (
    <div className="mt-5 " style={{backgroundColor:textColor}}>
        <button className="w-20 h-12 bg-slate-500" onClick={()=>dispatch(decrement())}>-</button>
        <span>Text Count:{textCount}</span>
        <button className="w-20 h-12 bg-slate-500" onClick={()=>dispatch(increment())}>+</button>
        <button className="w-20 h-12 bg-slate-500" onClick={()=>{dispatch(incrementByAmount(10))}}>+</button>


    </div>
  )
}

export default Count