import React, { useState } from "react";
import { connect } from "react-redux";
import { IoIosStar } from "react-icons/io";
import "./userRating.style.scss";
import { setRecipeRatingStart } from "../../redux-files/cook book/cookBook.actions";

const Rating = ({setRecipeRatingStart, recipeId, ratedRecipes}) => {
    const [score, SetScore] = useState(0);

    const hadnleScore = e => {
        const { id } = e.target;
        SetScore(Number(id));
    };

    return (
        <section className="user-rating">
            <h3>Ohodnoť tento recept</h3>
            { ratedRecipes.includes(recipeId) === false ? (
                <div className="user-rating--stars">
                    <IoIosStar
                        id="1"
                        onMouseEnter={e => hadnleScore(e)}
                        className={score >= 1 ? "active" : ""}
                        onClick={() => setRecipeRatingStart(score,recipeId)}
                    />
                    <IoIosStar
                        id="2"
                        onMouseEnter={e => hadnleScore(e)}
                        className={score >= 2 ? "active" : ""}
                        onClick={() => setRecipeRatingStart(score,recipeId)}
                    />
                    <IoIosStar
                        id="3"
                        onMouseEnter={e => hadnleScore(e)}
                        className={score >= 3 ? "active" : ""}
                        onClick={() => setRecipeRatingStart(score,recipeId)}
                    />
                    <IoIosStar
                        id="4"
                        onMouseEnter={e => hadnleScore(e)}
                        className={score >= 4 ? "active" : ""}
                        onClick={() => setRecipeRatingStart(score,recipeId)}
                    />
                    <IoIosStar
                        id="5"
                        onMouseEnter={e => hadnleScore(e)}
                        className={score === 5 ? "active" : ""}
                        onClick={() => setRecipeRatingStart(score,recipeId)}
                    />
                </div>
            ) : (
                <h4>Recept už si hodnotil</h4>
            )}
        </section>
    );
};

const mapStateToProps = ({cookBook}) => ({
    ratedRecipes: cookBook.ratedRecipes
});

const mapDispatchToProps = {setRecipeRatingStart};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
