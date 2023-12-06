import React from "react";
import "./work.scss";
import WorkList from "./worklist";

const WorkItem = ({ title, content, src, srcSet, classname }) => {
  return (
    <div className={`work__section__container__box ${classname} `}>
      <h3 className="title">{title}</h3>
      <img src={src} srcSet={srcSet} alt={title} />
      <div className={`work__section__container__box__text `}>
        <p className="content">{content}</p>
        <a href="#">View Project</a>
      </div>
    </div>
  );
};

const Work = () => {
  const renderWorkItems = (category) => {
    const items = WorkList.filter((item) => item.category === category);
    return items.map((item, index) => (
      <WorkItem
        key={index}
        classname={item.classname}
        title={item.title}
        content={item.content}
        src={item.src}
        srcSet={item.srcSet}
        category={item.category}
      />
    ));
  };

  return (
    <div className="work">
      <div className="work__title">
        <h1>MY WORK</h1>
      </div>

      <div className="work__section">
        <h2>
          PRODUCT
          <br /> DESIGN
        </h2>
        <div className="work__section__container product">
          {renderWorkItems("product")}
        </div>
        <h2>
          UIUX
          <br /> DESIGN
        </h2>
        <div className="work__section__container uiux">
          {renderWorkItems("uiux")}
        </div>
        <h2>EXHIBITION</h2>
        <div className="work__section__container exhibition">
          {renderWorkItems("exhibition")}
        </div>
        <h2>
          GRAPHIC
          <br /> DESIGN
        </h2>
        <div className="work__section__container poster">
          {renderWorkItems("poster")}
        </div>
      </div>
    </div>
  );
};
export default Work;
