import React from "react";
import "./customInput.style.scss";


const CustomInput = ({ name, value,...OtherProps}) => {
    return (
        <div className="custom-input">
            <input name={name} {...OtherProps} value={value}/>
            <label htmlFor="name" className={value? "active": ""}>{name}</label>
        </div>
    );
};

export default CustomInput;
