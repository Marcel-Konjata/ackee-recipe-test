import React, { Component } from "react";
import { connect } from "react-redux";

import CustomInput from "./input group/CustomInput";
import "./RecipeForm.style.scss";
import "./ingredient.style.scss";
import { IoMdAdd } from "react-icons/io";
import { postRecipeStart } from "../../redux-files/Recipe hadnling/recipeFormActions";

class RecipeForm extends Component {
    state = {
        name: "",
        info: "",
        duration: "",
        description: "",
        ingredients: [""]
    };
    //normal inputs handle
    handlechange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.postRecipeStart(this.state);
        //state reset
        this.setState({
            name: "",
            info: "",
            duration: "",
            description: "",
            ingredients: [""]
        });
    };
    //////////////////////////////////

    //ingredients handle -> possibly can be extracted to separate component
    //poznámka pro code review -> bylo několik možností jak separovat logiku, ale chci to poslat co nejdřív a ztratil sem 2 hodiny hledáním chyby
    handlechangeIngredient = event => {
        const { id, value } = event.target;

        this.setState(prevstate => {
            const list = prevstate.ingredients.map((item, index) => {
                if (index === Number(id)) {
                    return value;
                } else return item;
            });
            return { ingredients: list };
        });
    };

    generateIngredients = ingredients => {
        return ingredients.map((item, index) => (
            <div key={index} className="ingredients-field">
                <input
                    placeholder="Vaše ingredience"
                    id={index}
                    value={this.state.ingredients[index]}
                    onChange={e => this.handlechangeIngredient(e)}
                />
            </div>
        ));
    };

    addField = () => {
        this.setState(prevstate => {
            const list = prevstate.ingredients.concat([""]);
            return { ingredients: list };
        });
    };
    ////////////////////////////////////////////////////////////////////

    render() {
        const { name, info, duration, description, ingredients } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="recipe-form">
                <CustomInput
                    name="name"
                    value={name}
                    onChange={this.handlechange}
                    type="text"
                    required
                />
                <CustomInput
                    required
                    name="info"
                    type="text"
                    value={info}
                    onChange={this.handlechange}
                />
                <div className="ingredients">
                    <h3>Ingredience</h3>
                    {this.generateIngredients(ingredients)}
                    <button
                        className="ingredients-button"
                        type="button"
                        onClick={this.addField}
                    >
                        <IoMdAdd id="plus" />
                        <span>pridat ingredienci</span>
                    </button>
                </div>
                <CustomInput
                    name="description"
                    type="text"
                    value={description}
                    onChange={this.handlechange}
                    required
                />
                <CustomInput
                    name="duration"
                    value={duration}
                    onChange={this.handlechange}
                    required
                    type="number"
                />
                <button className="submit-btn">Vytvořit Recept</button>
            </form>
        );
    }
}

const mapDispatchToProps = { postRecipeStart };

export default connect(
    null,
    mapDispatchToProps
)(RecipeForm);
