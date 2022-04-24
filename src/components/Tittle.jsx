import Styles from './Tittle.module.css';

function Header (){
    return (
    <div className={Styles.header}>
        <img src="#" alt="icon weather app" />
        <h1> Hello, Welcome the weather App!</h1>
    </div>
    );
}

export default Header;