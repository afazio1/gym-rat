import "./button.styles.css";

const Button = ({ text, type }) => {
    return (
        <span className={ type }>{ text }</span>
    )
}

export default Button;