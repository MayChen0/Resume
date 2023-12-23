import React from "react";
import TrainingImages from "./imagelist";
import TrainingContext from "./contextlist";
import Menubar from "./menubar";

import "./training.scss";

const Training = () => {
  const Image = ({ imageKey }) => {
    const image = TrainingImages.find((img) => img.key === imageKey);

    if (!image) {
      return null;
    }

    return (
      <picture className={`training__container__image ${image.key}`}>
        <source media="(min-width: 768px)" srcSet={image.srcSet} />
        <source media="(max-width: 768px)" srcSet={image.srcSetStraight} />
        <img src={image.src} alt={image.alt} />
      </picture>
    );
  };
  const Context = ({ contextKey }) => {
    const context = TrainingContext.find(
      (context) => context.key === contextKey
    );

    if (!context) {
      return null;
    }

    return (
      <div className="training__container__context">
        <p>{context.string}</p>
      </div>
    );
  };

  return (
    <div className="training">
      <Menubar />
      <div className="training__container">
        <div className="training__container__title">
          <h1>Offshore Wind Turbine Maintenance Training Game</h1>
        </div>

        <Image imageKey="introduce" />
        <Context contextKey="introduce" />
        <Context contextKey="introduce_2" />
        <h3 id="method">Design Method</h3>
        <Image imageKey="method" />
        <Context contextKey="method" />
        <Context contextKey="method_2" />
        <h3>Research Flow</h3>
        <Image imageKey="researchflow" />
        <h3 id="research">Preliminary Research</h3>
        <Image imageKey="observation" />
        <Context contextKey="preliminary" />
        <Context contextKey="preliminary_2" />
        <h3 id="design">Game Content Design</h3>
        <Context contextKey="content" />
        <h4>Function Flow</h4>
        <Image imageKey="functionflow" />
        <Context contextKey="functionflow" />
        <h4>Wireframe</h4>
        <div className="training__container__wireframebox">
          <Image imageKey="wireframe1" />
          <Image imageKey="wireframe2" />
        </div>
        <h4>Mockup</h4>
        <Image imageKey="mockup" />
        <Context contextKey="mockup" />
        <h3 id="prototype">Prototype Development & Testing</h3>
        <Context contextKey="prototype" />
        <h4>Expert Evaluation</h4>
        <Context contextKey="expertevaluation" />
        <Image imageKey="expert" />
        <h4>User Testing</h4>
        <Context contextKey="usertesting" />
        <Image imageKey="users" />
        <h3 id="end">End Product</h3>
        <Context contextKey="end" />
        <div className="training__container__video">
          <div className="training__container__video__box">
            <iframe
              src="https://www.youtube.com/embed/h3qfNsdaxrM"
              title="Offshore Wind Turbine Maintenance Training Game"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
