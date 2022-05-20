import logo from "../../assets/images/logo_dept.svg"
import instagram from "../../assets/images/instagram.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import arrow from "../../assets/images/arrow_up.svg"
import {useWindowSize} from "../../hooks/WindowsSize";
/**
 * It contains the footer of the app
 * @component
 */
function Footer(){
    /**
     * @property {boolean} isMobile Defines whether clients device is a mobile or not see {@link useWindowSize}
     */
    const isMobile:boolean=useWindowSize();
    return (
        <footer>
            <div className="back-to-top" onClick={()=>{window.scroll(0,0)}}><img src={arrow} alt="^"/>top</div>
            <div className="row">
                <nav className="button-menu">
                    {!isMobile&&<img src={logo} alt="DEPT"/>}
                    <ul>
                        <li>WORK</li>
                        <li>SERVICES</li>
                        <li>STORIES</li>
                        <li>ABOUT</li>
                        <li>CAREERS</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
                <div className="social">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={instagram} alt="instagram"/>
                </div>
            </div>
            <div className="info-row">
                <div className="info">
                    <span>Chamber of Commerce: 63464101</span>
                    <span>VAT: NL 8552.47.502.B01</span>
                    <span>Terms and conditions</span>
                </div>
                <div className="copyright">© 2018 Dept Agency</div>
            </div>
        </footer>
    )
}
export default Footer;