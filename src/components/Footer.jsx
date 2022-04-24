import Styles from './Footer.module.css';

function Footer () {
    return (
    <div ClassName={Styles.posFo}>
        <footer>
            <div className={Styles.credits}>
                <span><b>Dev By  <a href="https://www.linkedin.com/in/walter-meneses-a52172232/">WalterMeneses</a> 2022</b></span>
            </div>
    </footer>
    </div>
    );
}

export default Footer;