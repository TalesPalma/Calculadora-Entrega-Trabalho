import { useState } from "react";
import convertNumberToInt from "../../tools/Tools";
import "./ButtonCalculator.css";

const ButtonCalculator = (props: { number: string,onChange:(number:string) => void, state:boolean}) => {
    return (
        <button disabled={props.state} className="calculadora__button" onClick={(e) =>  props.onChange(e.currentTarget.value)} value={props.number}>
            {props.number}
        </button>
    );
};

export default ButtonCalculator;