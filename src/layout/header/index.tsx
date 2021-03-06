import {useState} from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
/**
 * It contains the top bar of the app
 * {@link Menu} is wrapped in this component
 * @component
 */
function Header() {
    /**
     * @property {boolean} showMenu a state which indicates the menu visibility status
     */
    const [showMenu,setShowMenu]=useState(false);
    return (
        <header className={`Navbar ${showMenu?"menu-open":""}`}>
            <div className="logo" >
                <svg width="100" height="29" viewBox="0 0 100 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5096 13.8975C25.5096 6.85102 21.6628 1.42236 11.884 1.42236H1.42218V26.3726H11.884C21.6628 26.3726 25.5096 20.944 25.5096 13.8975ZM18.3912 13.8975C18.3912 18.8228 15.623 20.6564 11.7762 20.6564H8.21699V7.13864H11.7762C15.623 7.13864 18.3912 8.97215 18.3912 13.8975Z" fill="black"/>
                    <path d="M27.1368 26.3726H46.91V20.6923H33.9316V16.4141H45.3281V11.0214H33.9316V7.10268H46.5864V1.42236H27.1368V26.3726Z" fill="black"/>
                    <path d="M69.9278 10.0867C69.9278 3.79516 65.9012 1.42236 59.6457 1.42236H48.8243V26.3726H55.6191V18.751H59.6457C65.9012 18.751 69.9278 16.3781 69.9278 10.0867ZM62.8814 10.0867C62.8814 12.5314 61.7309 13.538 58.9626 13.538H55.6191V6.63531H58.9626C61.7309 6.63531 62.8814 7.64195 62.8814 10.0867Z" fill="black"/>
                    <path d="M70.6693 7.24649H78.5426V26.3726H85.3374V7.24649H93.2107V1.42236H70.6693V7.24649Z" fill="black"/>
                    <path d="M90.3873 22.8795C90.3873 25.1373 92.2151 26.9651 94.4732 26.9651C96.7309 26.9651 98.5769 25.1373 98.5769 22.8795C98.5769 20.6216 96.7309 18.7759 94.4732 18.7759C92.2151 18.7759 90.3873 20.6216 90.3873 22.8795ZM91.1758 22.8795C91.1758 21.0159 92.6451 19.4927 94.4732 19.4927C96.3005 19.4927 97.7882 21.0159 97.7882 22.8795C97.7882 24.743 96.3005 26.2483 94.4732 26.2483C92.6451 26.2483 91.1758 24.743 91.1758 22.8795ZM92.5556 24.9043H93.8454V23.5066H94.5808L95.3508 24.9043H96.7487L95.8168 23.2558C96.2472 23.0766 96.569 22.5928 96.569 22.0552C96.569 21.1054 95.9599 20.6574 94.9205 20.6574H92.5556V24.9043ZM95.261 22.073C95.261 22.4135 95.0468 22.5569 94.6342 22.5569H93.8454V21.6609H94.6342C95.0468 21.6609 95.261 21.7685 95.261 22.073Z" fill="black"/>
                </svg>
            </div>
            <div className="menu-icon" onClick={()=>{setShowMenu(!showMenu)}}>
                {!showMenu?<>Menu<FontAwesomeIcon icon={faGripLines} size="lg" /></>:<FontAwesomeIcon icon={faCircleXmark} size="2x" inverse />}
            </div>
            {showMenu && <Menu setShowMenu={setShowMenu}/>}
        </header>
    )
}

export default Header;