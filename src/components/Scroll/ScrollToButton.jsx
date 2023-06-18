import React from "react";
import { scrollTo } from "../utils";
import {Button} from "react-bootstrap";

const ScrollToButton = ({ toId, toRef, duration, children, type }) => {
    const handleClick = () => scrollTo({ id: toId, ref: toRef, duration});
        if(type === "btn"){
                return <Button variant="outline-blue" onClick={handleClick}>{children}</Button>
        }
        else {
                return <h1 onClick={handleClick}>{children}</h1>
        }
}

export default ScrollToButton;
