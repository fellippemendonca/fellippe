import React from 'react';
import './Contact.css';
import cell from '../../assets/images/cell.png';
import skype from '../../assets/images/skype.png';
import gmail from '../../assets/images/gmail.png';
import linkedin from '../../assets/images/linkedin.png';

function Contact(props) {
  return (
    <div className="Contents">
      <div className="Contact">
        <h1>Contacts</h1>
        <div>
            <a href="skype:fellippe.mendonca?chat">
              <img src={skype} className="Skype" alt="skype" style={{width: 100, height: 100, padding: '2%'}}/>
            </a>
            <a href="mailto::fellippe.mendonca@gmail.com">
              <img src={gmail} className="Gmail" alt="gmail" style={{width: 100, height: 100, padding: '2%'}}/>
            </a>
            <a href="https://www.linkedin.com/in/fellippe-de-lelis-mendon%C3%A7a-799446a0/">
              <img src={linkedin} className="Linkedin" alt="linkedin" style={{width: 100, height: 100, padding: '2%'}}/>
            </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
