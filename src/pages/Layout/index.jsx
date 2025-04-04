import { useState } from "react"
import MyHeader from "../../components/MyHeader"
import MyNavBar from "../../components/MyNavbar";

function Layout( {pageName} ) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="Layout">
            <MyHeader pageName={pageName} navOpen={navOpen} setNavOpen={setNavOpen} />
            <MyNavBar navOpen={navOpen} />
        </div>
    )
}

export default Layout