import { useDispatch } from "react-redux"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getMenu } from "../ReduxToolkit/features/menu/menuSlice"
import useMenu from "../hooks/useMenu"

const MenuPage = () => {

    const dispatch = useDispatch()
    const { menuReducer } = useSelector(state => state)

    const { menu, loading, error } = useMenu()

    console.log("menu dari custom hooks", menu);
    

    // console.log("menuReducer", menuReducer)

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

<br />
<br />
<br />
<br />
<br />
<br />

<h1>Dari custom hooks</h1>
            {
                loading ? <h1>Loading...</h1> : 
                    menu.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3>{item.name}</h3>
                                {/* <p>{item.description}</p> */}
                                {/* <p>{item.price}</p> */}
                            </div>
                        )
                    })
                
            }

        </div>
    )
}

export default MenuPage