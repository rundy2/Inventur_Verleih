import React from 'react';
import './App.css';
import './Popupstyle.css';
import Popup from './Popup';


function Startseite() {
  return (
    <div className="contain">
      <div className="Tabellenüberschrift"><h2>Ausgeliehene Dinge</h2></div>
      <div className="Anmeldebox">
        
        <p><img src={process.env.PUBLIC_URL+"images/defaultprof_pick.jpg"} className="App-logo" /></p>
        <p><h3>Anmeldung</h3></p>
        const [isOpen, setIsOpen] = useState(false);
        function togglePopup(){setIsOpen(!isOpen)}'
        return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}/>
    <p>Lorem ipsum </p>
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>} handleClose={togglePopup}/>}
  </div>
      </div>
      <div className="Tabelle">
      <div classenname="Table" >
      <table>
        <tr>
          <th>Objekt</th>
          <th>Rückgabe bis</th>
          <th>Zimmer</th>
          <th>Schrank</th>
          <th>Fach</th>
          <th>Anmerkung</th>
          <th></th>
        </tr>
            <tr>
              <td>Werners IPhone5s</td>
              <td>20.12.2021</td>
              <td>Z902</td>
              <td>Schrank#1</td>
              <td>1links</td>
              <td></td>
              <td><button class="button">Zurükgeben</button></td>
            </tr>
      </table>
      </div>
  </div>
  </div>
  )
}


export default StartseiteStartseite;
