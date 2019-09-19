import { Component } from "react";
import ReactDOM from "react-dom";

const ROOT_ELEMENT = document.getElementById("portal");

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement("div");
    }

    componentDidMount() {
        ROOT_ELEMENT.appendChild(this.element);
    }
    componentWillUnmount() {
        ROOT_ELEMENT.removeChild(this.element);
    }

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.element);
    }
}
