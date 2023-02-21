import React from 'react';
import navBar from './components/navbar';
import cartWidget from './components/cartWidget';

class Principal extends React.Component{
  render() {
    return(
      <>
          <navBar />
          <cartWidget />
      </>      
    )
  };


}

export default Principal;
