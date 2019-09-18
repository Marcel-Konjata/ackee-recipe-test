import React from 'react'
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {getRecipesStart} from "../redux-files/cook book/cookBook.actions"


const HomePage = ({getRecipesStart, cookBook}) => {

    React.useEffect(() => {
        getRecipesStart()
        
    }, [])

    return (
        <div>
            HomePage
        </div>
    )
}

HomePage.propTypes = {
  cookBook: PropTypes.object,
  getRecipesStart: PropTypes.func
}

const mapStateToProps = ({cookBook}) => ({
    cookBook
})

const mapDispatchToProps = {
    getRecipesStart
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

