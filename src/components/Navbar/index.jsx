import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", backgroundColor: "black", color: "white", padding: "10px",alignItems: "center"}}>
            <h1>Navbar</h1>
            <div>
                <Link 
                style={{marginRight: "10px", textDecoration: "none", color: "white"}}
                to="/">Home</Link>
                <Link 
                style={{marginRight: "10px", textDecoration: "none", color: "white"}}
                to="/menu">Menu</Link>
            </div>
        </div>
    )
}

export default Navbar