import Counter from "../features/counter/Count"
import Theme from "../features/theme/Theme"


const Home = () => {
  return (
    <div>
        <h1 className="text-3xl">Home</h1>
        <Counter/>
        <Theme/>
    </div>
  )
}

export default Home