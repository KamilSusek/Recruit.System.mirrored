import React from 'react';
import '../css/MainPage.css';
import '../css/LoginPopup.css';
import Popup from 'reactjs-popup';
import network from '../resources/network.png';
import idea from '../resources/idea.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from 'react-router-dom';

class MainPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      user: [],
    };
  }

  componentDidMount () {
    console.log ('Component did mount.');
    console.log (this.state.user);
  }

  render () {
    return (
      <div>
        <div>
          <ul className="navBar">
            <li className="navBar navBarToLeft">
              <p className="appTitle">
                System Obsługi Rekrutacji
              </p>
            </li>
            <li className="navBar navBarToRight">
              <form>
                <li className="navBar navBarToRight">
                  <button className="loginButton">Zaloguj się</button>
                </li>
                <li className="navBar navBarToRight">
                  <input
                    className="loginInput"
                    placeholder="hasło"
                    type="password"
                  />
                </li>
                <li className="navBar navBarToRight">
                  <input
                    className="loginInput"
                    placeholder="login"
                    type="login"
                  />
                </li>
              </form>
            </li>
            <li className="navBar navBarToRight" />
          </ul>
        </div>
        <div className="pageContent">

          <p className="mainContent">
            <br />
            <p style={{fontWeight: 'bold'}}>O programie</p>
            <br />
            Proces rekrutacji jest związany z gromadzeniem znacznej ilości danych związanych głównie
            z nadesłanymi CV. Aplikacja wspiera duże oraz małe przedsiębiorstwa pomagając
            zarządzać całym etapem rekrutacji odciążając tym samym zespół HR. Należy również
            zadbać o bezpieczeństwo danych osobowych. Obecnie wykorzystywanie wyłącznie arkuszy
            kalkulacyjnych czy e-maili odchodzi w przeszłość. Informacje dotyczące kandydatów
            powinny być dla pracowników HR przejrzyste, co usprawni proces rekrutacji. Istotne jest to
            zwłaszcza w przypadku, kiedy mamy do czynienia z dużą liczbą aplikacji na dane
            stanowisko.
          </p>
          <img className="networkImg" src={network} />
          <img className="networkImg " src={idea} />

          <p className="mainContent">
            <br />
            <p style={{fontWeight: 'bold'}}> Automatyzacja procesów</p>
            <br />
            Aplikacja wychodzi naprzeciw oczekiwaniom, które stawiane są przez zespoły HR trudniące
            się rekrutacją w szczególności na dużą skalę. Wszystkie czynności wykonywane podczas
            typowej rekrutacji zostały maksymalnie zautomatyzowane przez co rekruterzy mogą skupić
            się na najważniejszej rzeczy jaką jest sam kandydat nie martwiąc się o stosy dokumentów.
          </p>

          <p className="mainContent">
            <br />
            <p style={{fontWeight: 'bold'}}> Pomoc w legalizacji pracy </p>
            <br />

            Najważniejszą rzeczą podczas rekrutacji w szególności tej owocnej jest podpisanie
            stosownej umowy z kandydatem. Ten proces również został zautomatyzowany poprzez
            zastosowanie systemu “Thru-Sync”, który umożliwia przesłanie umowy bezpośrednio do
            kandydata.
          </p>
        </div>

        <div>
          <footer className="footerSection">
            <br /><br />© 2020 - System Obsługi Rekrutacji
          </footer>
        </div>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      pswd: '',
    };
    this.handleLoginClick = this.handleLoginClick.bind (this);
  }

  isFormNotEmpty () {
    return this.state.email.length > 0 && this.state.pswd.length > 0;
  }

  handleLoginClick () {}

  render () {
    return (
      <Popup
        trigger={
          <button className="loginButton">
            Zaloguj się
          </button>
        }
        onOpen={event => {
          console.log (document.getElementsByClassName ('slide').length);
        }}
        modal
        closeOnDocumentClick
      >
        <span className="loginForm">
          <form className="loginForm">
            <h1 className="loginForm"> Podaj dane logowania.</h1>
            <p className="loginForm" />
            <input className="loginForm" type="login" placeholder="login" />
            <br />
            <input className="loginForm" type="password" placeholder="hasło" />
            <br />
            <p className="loginForm" />
            <button className="loginForm" onClick={this.handleLoginClick}>
              <Link to="/recruiter">tmprecruiter</Link>
            </button>
            <br />
          </form>
        </span>
      </Popup>
    );
  }
}

export default MainPage;
