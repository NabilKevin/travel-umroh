import { useContext } from "react";
import { AppContext } from "../App";

const Footer = () => {
    const {mode} = useContext(AppContext);
    return (
        <div className={`container-fluid mt-5 bg-${mode === 'light' ? 'lights' : 'dark' } footer`} data-bs-theme={mode}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center" bis_skin_checked="1">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary copyright">© 2024 Nabil Travel, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a target='_blank' className="text-body-secondary" href="#"><i className="bi bi-twitter" width="24" height="24"></i></a></li>
                <li className="ms-3"><a target='_blank' className="text-body-secondary" href="https://instagram.com/nabilkevin07"><i className="bi bi-instagram" width="24" height="24"></i></a></li>
                <li className="ms-3"><a target='_blank' className="text-body-secondary" href="https://facebook.com/profile.php?id=61553747401599"><i className="bi bi-facebook" width="24" height="24"></i></a></li>
            </ul>
            </footer>
        </div>
    )
}

export default Footer;