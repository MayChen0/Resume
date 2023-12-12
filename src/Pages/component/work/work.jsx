import React from "react";
import "./work.scss";
import WorkList from "./worklist";

const categories = [
  { key: "product", label: "PRODUCT DESIGN" },
  { key: "uiux", label: "UI/UX DESIGN" },
  { key: "exhibition", label: "EXHIBITION" },
  { key: "poster", label: "GRAPHIC DESIGN" },
];

const WorkItem = ({ title, content, src, srcSet, classname }) => (
  <div className={`work__section__container__box ${classname} `}>
    <h3 className="title">{title}</h3>
    <img src={src} srcSet={srcSet} alt={title} />
    <div className={`work__section__container__box__text `}>
      <p className="content">{content}</p>
      <a href="#">View Project</a>
    </div>
  </div>
);

const Work = () => {
  const renderWorkSection = (category) => (
    <div
      key={category.key}
      className={`work__section__container ${category.key}`}
    >
      {renderWorkItems(category.key)}
    </div>
  );

  const renderWorkItems = (category) =>
    WorkList.filter((item) => item.category === category).map((item, index) => (
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

  return (
    <div className="work">
      <div className="work__title">
        <h1>MY WORK</h1>
      </div>
      <div className="work__section">
        {categories.map((category) => (
          <>
            <h2
              key={`${category.key}-heading`}
              className="work__section__categoryname"
            >
              {category.label}
            </h2>
            {renderWorkSection(category)}
          </>
        ))}
      </div>
    </div>
  );
};

export default Work;
