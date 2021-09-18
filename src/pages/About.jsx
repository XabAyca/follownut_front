import React from 'react';

const About = () => {
  return (
    <div className="about page-padding">
      <div className="container">
        <h1 className="text-center">A propos de nous...</h1>
        <hr />
        <div className="divcenter">
          <h3 className="text-center">Hello!</h3>
          <p>
            Nous sommes la promo printemps/été de The Hacking Project. THP (pour
            les intimes) est un bootcamp de 2 fois 3 mois basé sur le
            peer-learning. Les 3 premiers mois sont dédiés à l'apprentissage de
            HTML 5 / CSS 3 ainsi que Ruby et Ruby On Rails. Les 3 mois suivant
            sont alloués à l'apprentissage de Javascript et React. Le rythme est
            soutenu! Cela fait donc (presque) 6 mois que nous apprenons les
            rudiments du code et les subtilitées de la programmation. Sur
            discord du matin au soir, voir même au dela parfois (souvent)! Nous
            mettons toutes nos forces dans l'apprentissage du web devellopement!
          </p>

          <p>
            A chaque fin de trimestre des équipes se forment pour élaborer et
            développer un projet final qui sera passé en revu et validé ou non
            par un jury de développers professionnels.
          </p>

          <p>
            Nous vous proposons ici notre projet final, l'aboutissement de 6
            mois d'apprentissage!
          </p>

          <p>
            Nous avons choisi de créer une app pour les diététiciens et leurs
            patients. Afin de faciliter au maximum le suivi des patients par
            leurs diététicien. Chacun peut créer un compte utilisateur patient
            ou praticient. Un dashboard respectif est mit a disposition de
            chacuns. l'Api Calendly permet une prise de rendez vous fluide et
            éfficace synchronisé avec votre emploi du temps pour vous rendre la
            vie encore plus facile!
          </p>

          <p>
            La fine équipe est constituée de Xabi Aycaguer, Augustin Berne,
            Mathieu Paradis, Anthony Charron et Kleber Da Cunha! Et dire qu'il y
            a 6 mois on ne savait pas coder grand chose... Après des heures et
            des heures de travail intensives et parfois même d'acharnement voila
            ce que nous sommes capable de faire en l'espace de 10 Jours.
          </p>
        </div>
      </div>

      <div className="div-git">
        <hr />
        <div className="div-git-child">
          <i class="fab fa-github"></i>
          <a
            href="https://github.com/kleberkunha"
            target="_blank"
            rel="noreferrer"
          >
            Kleber Cunha
          </a>
        </div>
        <div className="div-git-child">
          <i class="fab fa-github"></i>
          <a
            href="https://github.com/aauugguussttiinn"
            target="_blank"
            rel="noreferrer"
          >
            Augustin Berne
          </a>
        </div>
        <div className="div-git-child">
          <i class="fab fa-github"></i>
          <a href="https://github.com/XabAyca" target="_blank" rel="noreferrer">
            Xabi Aycaguer
          </a>
        </div>
        <div className="div-git-child">
          <i class="fab fa-github"></i>
          <a
            href="https://github.com/AnthonyLebro"
            target="_blank"
            rel="noreferrer"
          >
            Anthony Charron
          </a>
        </div>
        <div className="div-git-child">
          <i class="fab fa-github"></i>
          <a
            href="https://github.com/MathieuParadis"
            target="_blank"
            rel="noreferrer"
          >
            Mathieu Paradis
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;