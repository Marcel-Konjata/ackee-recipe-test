import React from "react";
import { connect } from "react-redux";
import Navigation from "../../components/mobile nav/Navigation";
import { MdAccessTime } from "react-icons/md";
import StarRatingDipslay from "../../components/Stars/StarRatingDipslay";
import { getSingleRecipeStart } from "../../redux-files/cook book/cookBook.actions";
import "./recipe.style.scss";

const Recipe = ({ singleRecipe, error, id, getSingleRecipeStart}) => {
  
  //mělo by to nahradit class a explicitně ComponentDidUpdate, 
  //ale server mi vraci pouze jeden recept ikdyz zadam jakýkoliv id rucně, netuším kde je chyba
    React.useEffect(() => {
        getSingleRecipeStart(id)
      
    }, [id])

    return singleRecipe ? (
        <>
        <header className="recipe-headline">
            <Navigation returnIcon color="white" />
            <h2>"{singleRecipe.name}"</h2>
            <div className="recipe-headline--rating">
                {/* <StarRatingDipslay score={singleRecipe.score} /> */}
                <StarRatingDipslay score={5} color="white" scale={1.4} width={20}/>
                <div className="time">
                    <MdAccessTime />
                    <span>{singleRecipe.duration}</span> <span>min</span>
                </div>
            </div>
        </header>
        <main className="recipe-body">
            <section className="recipe-info">
                    <p>{singleRecipe.info}</p>
            </section>
            <section className="recipe-ingredients recipe-section">
                <h2 className="recipe-section--heading">Ingredience</h2>
                    <ul className="recipe-ingredients--list">
                        {singleRecipe.ingredients > 0 || singleRecipe.ingredients !== null ? 
                        //ne ID! do3lo by k naming kolizi
                        singleRecipe.ingredients.map((ingredience, index)=>(
                            <li key={index}><span>{ingredience}</span></li>
                        ))
                        : <span>Žádné ingredience nebyly zadány</span> }
                    </ul>
            </section>
            <section className="recipe-description recipe-section">
            <h2 className="recipe-section--heading">Příprava jídla</h2>
                    <p>
                        {singleRecipe.description}
                    </p>
            </section>
        </main>
        <footer>
            RATING
        </footer>
        </>
    ) : null;
};

const mapStateToProps = ({ cookBook }, otherProps) => ({
    singleRecipe: cookBook.singleRecipe,
    error: cookBook.getSingleRecipeError,
    id: otherProps.match.params.id
});

const mapDispatchToProps = {
    getSingleRecipeStart
};

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
