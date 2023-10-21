import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatgestion.css';

const WhatGestion = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Qui sommes-nous ?" text="Découvrez la plateforme en ligne de l'Agence Urbaine Marocaine conçue pour traiter efficacement les demandes des citoyens." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Au Service des Citoyens avec des Solutions en Ligne faciles et simples</h1>
      <p>Découvrez Nos Services</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Interface Conviviale" text="Plateforme intuitive facilitant la soumission sans tracas des demandes d'autorisation." />
      <Feature title="Suivi en Temps Réel" text="Restez informé sur le statut de votre demande, recevez des notifications instantanées et soumettez des documents supplémentaires électroniquement." />
      <Feature title="Traitement Efficace" text="Traitement rapide et transparent des demandes, garantissant aux citoyens une expérience sans faille avec nos services." />
    </div>
  </div>
);

export default WhatGestion;