import { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
    const {changeMode, modeBtn, mode} = useContext(AppContext)
    return (
        <nav className={`navbar navbar-expand-lg bg-${mode === 'light' ? 'lights' : 'dark'} position-fixed top-0 start-0 end-0 z-3`} data-bs-theme={mode}>
            <div className="container-lg position-relative">
                <a className="navbar-brand" href="/">Nabil Travel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/prices">Prices</a>
                    </li>
                </ul>
                </div>
                <div className="position-absolute changeMode" onClick={changeMode} style={{ backgroundColor: modeBtn.backgroundCirlce.bg, borderColor: modeBtn.backgroundCirlce.border }}>
                    <div className="circle" style={{ left: modeBtn.circle.left, backgroundColor: modeBtn.circle.bg, borderColor: modeBtn.circle.border }}></div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;