import "./Header.css";
import amex from '../../assets/images/amex.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import SelectHeader from '../SelectHeader/SelectHeader';

function Header() {
  return (
    <>
     <nav>
      <div className="nav-line-left">
        <div><img src={amex}/></div>
        <div className="header-font">
             My account
          </div>
        <div className="header-font">Cards</div>
        <div className="header-font">Travel</div>
        <div className="header-font">Insurance</div>
        <div className="header-font">Rewards & Benefits</div>
        <div className="header-font">Business</div>
      </div>
      <div className="nav-line-right">
        <div className="header-font">
        <FontAwesomeIcon icon={faShareSquare} />
        </div>
        <div className="header-font">Help</div>
        <div className="button-inline">Log In </div>
      </div>
    </nav>
    <SelectHeader/>
    </>
  );
}

export default Header;
