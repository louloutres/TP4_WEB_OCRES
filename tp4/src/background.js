import React from 'react';
import Thomas from './Pictures/Thomas_Ferrier.jpg';
import './StyleSheet.css';

class Profil extends React.Component {
   render()
    { return(
      <div className="container">
        <div className="Cadre">
          <div className="picture">
            < Picture />
          </div>
          <div className="Info">
            <Information />
          </div>
          <div className="button">
              <button>Style</button>
          </div>
        </div>
      </div>
   );
   }
  }
  
  function Picture (props) {
     
          return(
              <img src={Thomas} className="photo"/>
          )
      
  }

  class Information extends React.Component {
      render()
      {
          return(
            <p className='Data'>nom:</p>,
            <p className='Data'>Prenom:</p>,
            <p className='Data'>Date De Naissance:</p>

          )
      }
  }
  export default Profil;
  