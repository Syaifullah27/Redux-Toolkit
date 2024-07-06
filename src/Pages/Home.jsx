import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../ReduxToolkit/features/counter/CounterSlice";
import { decrement } from "../ReduxToolkit/features/counter/CounterSlice";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getMenu } from "../ReduxToolkit/features/menu/menuSlice";

const HomePage = () => {
    const dispatch = useDispatch()
    const countFromReducer = useSelector(state => state.CounterReducer.value)
    const count = useSelector(state => state.CounterSlice.value)
    const { menuReducer } = useSelector(state => state)
    // console.log("count", count);
    console.log("countFromReducer", countFromReducer);


    const handleAdd = () => {
        dispatch(increment())
    }
    const handleSub = () => {
        dispatch(decrement())
    }

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    const handleLoading = () => {
        if(menuReducer.loading){
            return <h1>Loading...</h1>
        } 
    }


    return (
        <div>
            <Navbar />
            <h1 style={{textAlign: "center"}}>Home Page</h1>
            {/* <h1>Redux Toolkit</h1> */}
            <p>{count}</p>
            <button onClick={handleSub}>kurang</button>
            <button onClick={handleAdd}>tambah</button>

            {handleLoading()}
            {
                menuReducer.menu.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.name}</h1>
                            {/* <p>{item.description}</p> */}
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default HomePage