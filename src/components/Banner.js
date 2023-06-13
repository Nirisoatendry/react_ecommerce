import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'; // bibliotheque pour creer des effets de frappe de texte
import logo from "../assets/image/logo.png"
export default class Banner extends Component {

    render() {
        return (
      <header class="header">
      <div class="header__logo-box">
      <div class="header__logo-box-start">
        <img class="header__logo" src={logo} alt="Logo" />
        </div>

      <div class="header__logo-box-mid">
        <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="phone" />
          <h1>+261 34 343 34</h1>
        </div>

      <div class="header__logo-box-last">
          
          <h1>Catégories</h1>
          <h1>Panier</h1>
          <h1>Profil</h1>
          <h1>Se connecter</h1>
        </div>
      </div>

      <div class="header__text-box">
        <h1 >
        Trouvez tout ce dont vous avez besoin 
        </h1>
        <p> 
          <Typewriter
        options={{
    strings: [' Vêtements et accessoires', 'Electronique'," Maison et jardin"," Beauté et santé"," Sports et loisirs","Auto et moto","Livre et médias","Alimentation et boissons"],
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString()
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</p>

        <div className="header__text-box-inputContainer">
          <input placeholder="Rechercher"/>
          <div className="header__text-box-inputContainer-imgConatiner">
            <img src="https://www.wanderon.in/svg/search.svg" alt="phone" />
          </div>
          </div>
          <div>

{/* card */}
 <div className="header__text-box-card_container">
            <div className="header__text-box-card_container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="header__text-box-card_container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h1>5000+</h1>
                        <h1>{item.title}</h1>
                    </div>
                )})}
                </div>
               
            </div>
        </div>
      </div>
    </header>
        )
    }
}
