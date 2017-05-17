import React from 'react';
import Welcome from './welcome/Welcome';
import Bio from './bio/Bio';
import Work from './work/Work';
import Contact from './contact/Contact';

function setPage(props) {
  switch(props.name) {
    case 'home': return <Welcome owner='Fellippe'/>;
    case 'bio': return <Bio owner='bio'/>;
    case 'work': return <Work owner='work'/>;
    case 'contact': return <Contact owner='contact'/>;
    default: return <Welcome owner='Fellippe'/>;
  }
}

function PageSelect(props) {
  return setPage(props);
}
export default PageSelect;
