import Header from "./header";
import Body from "./content";
import Footer from "./footer";

/**
 * It is the main wrapper for all the Other Components
 *it contains 3 children:
 * {@link Header},
 * {@link Body},
 * {@link Footer},
 * @component
 */
function Layout() {

    return (
        <>
            <Header/>
            <Body />
            <Footer/>
        </>
    )
}

export default Layout;