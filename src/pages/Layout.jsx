import { useState } from "react"
import MyHeader from "../components/Layout/MyHeader"
import MyNavBar from "../components/Layout/MyNavbar"

function Layout( {pageName} ) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="Layout">
            <MyHeader pageName={pageName} navOpen={navOpen} setNavOpen={setNavOpen} />
            {navOpen && <MyNavBar />}
        </div>
    )
}

export default Layout