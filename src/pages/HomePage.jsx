import React from 'react'
import { GetRecipes } from '../API/api'

const HomePage = () => {

    React.useEffect(() => {
        GetRecipes()
    
    }, [])

    return (
        <div>
            HomePage
        </div>
    )
}

export default HomePage
