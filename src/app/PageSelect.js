import React from 'react';
import Home from './home/Home';
import Bio from './bio/Bio';
import Work from './work/Work';
import Contact from './contact/Contact';

function setPage(props) {
  switch(props.name) {
    case 'home': return <Home owner='Fellippe'/>;
    case 'bio': return <Bio owner='bio'/>;
    case 'work': return <Work owner='work'/>;
    case 'contact': return <Contact owner='contact'/>;
    default: return <Home owner='Fellippe'/>;
  }
}

function PageSelect(props) {
  return setPage(props);
}
export default PageSelect;
