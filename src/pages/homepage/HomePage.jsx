import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//saga related
import { getRecipesStart } from "../../redux-files/cook book/cookBook.actions";

//components
import RecipeThumbnail from "../../components/recipes/recipeThumbnail/RecipeThumbnail.component";
import LoadingComponent from "../../components/loading/LoadingComponent";
import Navigation from "../../components/mobile nav/Navigation";

const HomePage = ({ getRecipesStart, cookBook }) => {
    React.useEffect(() => {
        getRecipesStart();
    }, []);

    return (
        <>
            <Navigation title="Recepty" returnIcon={false} />
            <section>
                {cookBook.recipes.length > 0 ? (
                    cookBook.recipes.map(recipe => (
                        <RecipeThumbnail
                            key={recipe.id}
                            name={recipe.name}
                            duration={recipe.duration}
                            id={recipe.id}
                            score={recipe.score}
                        />
                    ))
                ) : (
                    <LoadingComponent />
                )}
            </section>
        </>
    );
};

HomePage.propTypes = {
    cookBook: PropTypes.object,
    getRecipesStart: PropTypes.func
};

const mapStateToProps = ({ cookBook }) => ({
    cookBook
});

const mapDispatchToProps = {
    getRecipesStart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
