import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomInput from "./input group/CustomInput";
import "./RecipeForm.style.scss";

export default class RecipeForm extends Component {
    static propTypes = {
        prop: PropTypes
    };

    state = {
        name: "",
        info: "",
        duration: null,
        description: "",
        ingredients: [],
    };

    handlechange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    };
    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        const {name,info,duration,description} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="recipe-form">
                <CustomInput name="name" value={name} onChange={this.handlechange}/>
                <CustomInput name="info" value={info} onChange={this.handlechange}/>
                <div>ingredience</div>
                <CustomInput name="duration" value={duration} onChange={this.handlechange} />
                <CustomInput name="description" value={description} onChange={this.handlechange} />

            </form>
        );
    }
}
