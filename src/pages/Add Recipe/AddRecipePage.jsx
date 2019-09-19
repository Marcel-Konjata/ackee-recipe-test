import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeForm from "../../components/form/RecipeForm";
import Navigation from "../../components/mobile nav/Navigation";
import Modal from "../../portal/Modal";
import "./modal.styles.scss";
import { recipeReducerReset } from "../../redux-files/Recipe hadnling/recipeFormActions";

const AddRecipePage = ({ postSuccess, postError, recipeReducerReset }) => {
    return (
        <div>
            <Navigation color="blue" returnIcon title="Přidat Recept" />
            <RecipeForm />
            {postSuccess === true || postError !== null ? (
                <Modal>
                    <div className="modal-popup">
                        <div className="modal-CTA">
                            <h3 className="modal-message">
                                {postSuccess
                                    ? "Recept byl přidán"
                                    : "Někde došlo k chybě"}
                            </h3>
                            <div className="modal-buttons">
                                <Link to="/">Zpět na ecepty</Link>
                                <button
                                    className="modal-addBTN"
                                    onClick={recipeReducerReset}
                                >
                                    {postSuccess
                                        ? "Přidat Další"
                                        : "Zkusit znovu"}
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
};

const mapStateToProps = ({ recipeForm }) => ({
    postSuccess: recipeForm.postSuccess,
    postError: recipeForm.postError
});

const mapDispatchToProps = {
    recipeReducerReset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRecipePage);
