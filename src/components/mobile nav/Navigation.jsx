import { Link } from "react-router-dom";
import React from "react";
import { IoMdAdd, IoMdArrowBack } from "react-icons/io";
import PropTypes from "prop-types";
import "./navigation.style.scss"

const Navigation = ({title="", returnIcon, color="blue"}) => {
    return (
        <nav className="main-nav">
            {returnIcon && <Link to="/" className="left-link"><IoMdArrowBack style={{color}} className="react-icon" /></Link>}
           {title && <h2>{title}</h2>}
            <Link to="/add-recipe" className="right-link">
                <IoMdAdd className="react-icon" style={{color}} />
            </Link>
        </nav>
    );
};

Navigation.propTypes = {
  returnIcon: PropTypes.bool,
  title: PropTypes.string
}

export default Navigation;
