import { useState } from "react"
import MyHeader from "../../components/MyHeader"
import MyNavBar from "../../components/MyNavbar";
import MyFooter from "../../components/MyFooter";

function Layout( {children, pageName} ) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="Layout">
            <MyHeader pageName={pageName} navOpen={navOpen} setNavOpen={setNavOpen} />
            <MyNavBar navOpen={navOpen} />
            <>{children}</>
            <MyFooter />
        </div>
    )
}

export default Layout