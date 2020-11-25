import React from 'react';
import './StyleSheet.css';
import './background';
import Thomas from './Pictures/Thomas_Ferrier.jpg';
import Adrien from './Pictures/Adrien.jpg'
import Marie from './Pictures/Marie.jpg'
import Profil from './background';
const profils = [
    {
      photo : Thomas,
      nom: 'Ferrier',
      prenom:'Thomas',
      date de naissance: '9 fevrier 1999'
    },
    {
      photo:Marie,
      nom:'Pussard'
      prenom: 'Marie'
      date de naissance : '8 octobre 1999'
    },
    {
      photo:Adrien,
      nom: 'Martinon'
      prenom:'Adrien'
      date de naissance:'20 juin 1999 '
    }
  ];
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state=profils[0]
    }
    changeProfil(){
        return (
            <Profil value={this.state} />
        );

    }
    renderPost(){
        return(
            <LastPost value={this.state} />
        );
    }
    renderProfil(){
        return (
            <Profil value={this.state} />
        );  
    }
        render(){
            return (
            
             <div className="container">
             <div className="Button">
                 <button 
                     onClick={() => this.changeProfil(0)} 
                     className="bouton">
                         Thomas
                 </button>

                 <button 
                     onClick={() => this.changeProfil(1)} 
                     className="bouton">
                         Marie
                 </button>
                
                 <button 
                     onClick={() => this.changeProfil(2)} 
                     className="bouton">
                         Adrien
                 </button>
             </div>
             {this.renderProfil()}
             <div className="Tweet">
                 {this.renderPost}
             </div>
            
        }
    
}
export default Container ;