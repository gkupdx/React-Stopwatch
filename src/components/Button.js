//// Button.js - individual "button" component

const Button = ({ onClick, type }) => {
    return (
        <button onClick={onClick} className={type === "Reset" ? "resetBtn" : "actionBtn" }>{type}</button>
    )
}

export default Button;