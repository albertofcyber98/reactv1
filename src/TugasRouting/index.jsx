import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TugasPortalBerita from "../TugasPortalBerita/Index";
import TugasValidation from "../TugasFormValidation/FormRegister";
import './style.css';
const Routing = () =>{
    return(
        <div>
            <Router>
                <Link to="/" className="custom-button">Portal Berita</Link>
                <Link to="/validation" className="custom-button">Validation</Link>
                <Switch>
                    <Route exact path="/">
                        <TugasPortalBerita/>
                    </Route>
                    <Route path="/validation">
                        <TugasValidation/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Routing;