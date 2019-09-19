import React from "react";
import "./customInput.style.scss";


const CustomInput = ({ name, value,...OtherProps}) => {

const ziksejJmeno = (name) => {
    switch (name) {
        case "name":
           return "Název receptu";
        case "info":
            return "Úvodní text";
        case "duration":
                return "Čas";
        case "description":
                return "Postup";
        default:
            return name;
    }
}

const text = ziksejJmeno(name);

    return (
        <div className="custom-input">
            <input className={value? "filled" : ""} name={name} {...OtherProps} value={value}/>
            <label htmlFor="name" className={value? "active": ""}>{text}</label>
        </div>
    );
};

export default CustomInput;
