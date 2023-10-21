import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">&apos;
      <h1 className="gradient__text"> plateforme «e-services» des demandes d&apos;autorisations</h1>
      <p>Cette plateforme révolutionne les démarches administratives pour les citoyens. En dématérialisant les demandes d'autorisations, elle offre une expérience simplifiée et rapide. Les citoyens peuvent soumettre leurs demandes en ligne et grâce à un suivi en temps réel, les citoyens peuvent suivre l'avancement de leurs dossiers.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai"/>
    </div>
  </div>
);

export default Header;