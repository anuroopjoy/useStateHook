import './Button.css';

function Button({ toggleTheme }) {
    let className = 'button';

    return (
        <button className={className} onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
}

export default Button;
