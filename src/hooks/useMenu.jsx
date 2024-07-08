import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getMenu = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://api.mudoapi.tech/menus")
            setMenu(response.data.data.Data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    return { menu, loading, error }
}

export default useMenu