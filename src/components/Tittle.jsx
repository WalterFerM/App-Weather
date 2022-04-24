import Styles from './Tittle.module.css';

function Header (){
    return (
    <div className={Styles.header}>
        <img src="#" alt="icon weather app" className={Styles.logoType} />
        <h1 className={Styles.title}> Hello, Welcome the weather App!</h1>
    </div>
    );
}

export default Header;