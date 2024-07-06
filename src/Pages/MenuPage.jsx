import { useDispatch } from "react-redux"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getMenu } from "../ReduxToolkit/features/menu/menuSlice"

const MenuPage = () => {

    const dispatch = useDispatch()
    const { menuReducer } = useSelector(state => state)

    console.log("menuReducer", menuReducer)

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
            <h1 style={{textAlign: "center"}}>Menu Page</h1>
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

export default MenuPage