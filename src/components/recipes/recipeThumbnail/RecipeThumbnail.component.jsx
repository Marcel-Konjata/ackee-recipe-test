import React from "react";
import "./RecipeThumbnail.style.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import RecepImage from "../../../resources/img/recept.jpg";
import { MdAccessTime } from "react-icons/md";
import { getSingleRecipeStart } from "../../../redux-files/cook book/cookBook.actions";
import StarRatingDipslay from "../../Stars/StarRatingDipslay";

const RecipeThumbnail = ({
    score,
    duration,
    name,
    id,
    
}) => {
   

    return (
        <>
            <figure className="recipe-thumbnail">
                <Link to={`/recipe/${id}`}>
                   
                    <div
                        className="recipe-thumbnail-imageWrapper"
                        
                    >
                        <img src={RecepImage} alt={`${name} recipe`} />
                    <span className="recipe-thumbnail-imageWrapper--text">Ackee Recipe</span>
                    </div>
                </Link>
                <figcaption>
                    <Link to={`/recipe/${id}`}>
                       
                        <h4>{name}</h4>
                    </Link>
                    <span>
                        <StarRatingDipslay score={score} />
                    </span>
                    <div className="time">
                        <MdAccessTime />
                        <span>{duration}</span> <span>min</span>
                    </div>
                </figcaption>
            </figure>
        </>
    );
};

RecipeThumbnail.propTypes = {
    duration: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    score: PropTypes.number
};

const mapDispatchToProps = {
    getSingleRecipeStart
};

export default connect(
    null,
    mapDispatchToProps
)(RecipeThumbnail);
