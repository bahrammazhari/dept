import {Link,useLocation} from "react-router-dom";
import {useWindowSize} from "../../hooks/WindowsSize";
function Menu() {
    const isMobile: boolean = useWindowSize();
    let {pathname} = useLocation();
    const LINKS: string[] = ["", "work", "culture", "services", "partners", "stories", "careers", "events", "contact"];
    return (
        <div className="menu">
            {!isMobile && <>
                <div className="landen">
                    <a href="#" className="title">Landen</a>
                    <a href="#">GLOBAL</a>
                    <a href="#" className="active">NEDERLAND</a>
                    <a href="#">UNITED STATES</a>
                    <a href="#">IRELAND</a>
                    <a href="#">UNITED KINGDOM</a>
                    <a href="#">DEUTSCHLAND</a>
                    <a href="#">SCHWEIZ</a>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/DeptAgency/">FACEBOOK</a>
                    <a href="https://twitter.com/deptagency?lang=en">TWITTER</a>
                    <a href="https://www.instagram.com/deptagency/?hl=en">INSTAGRAM</a>
                    <a href="https://www.linkedin.com/company/deptagency">LINKEDIN</a>
                </div>
            </>}
            <ul className="main">
                <div className="fade"/>
                {LINKS.map((link, index) => (
                    <li key={index}><Link to={`/${link}`}
                                          className={`/${link}` === pathname ? "active" : ""}>{link === "" ? "HOME" : link?.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Menu;