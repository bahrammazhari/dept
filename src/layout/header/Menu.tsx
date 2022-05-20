import {Link,useLocation} from "react-router-dom";
import {useWindowSize} from "../../hooks/WindowsSize";
/**
 * Menu of the app
 * containing social media and routes
 * @component
 */
function Menu() {
    /**
     * @property {boolean} isMobile Defines whether clients device is a mobile or not see {@link useWindowSize}
     */
    const isMobile: boolean = useWindowSize();
    /**
     * @property {string} pathname shows the current route of app
     * App check the active menu with this
     */
    let {pathname} = useLocation();
    /**
     * @property {Array<string>} LINKS list of all available main routes to navigate
     * App generates the menu links with this
     */
    const LINKS: string[] = ["", "work", "culture", "services", "partners", "stories", "careers", "events", "contact"];
    return (
        <nav className="menu">
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
        </nav>
    )
}
export default Menu;