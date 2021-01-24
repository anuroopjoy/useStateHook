import './Text.css';

function Text({ theme, user }) {
    return <p className={theme}>Hello {user}</p>;
}

export default Text;
