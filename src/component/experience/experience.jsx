import React, { useState, useEffect } from "react";
import "./experience.scss";
import TimelineList from "./timelinelist";

const TimelineItem = ({
  category,
  year,
  location,
  company,
  position,
  discription,
  src,
  srcSet,
  hidden,
}) => {
  const [alternativeTimelineText, setAlternativeTimelineText] = useState(false);

  const handleClick = () => {
    if (category === "education") {
      return;
    }

    setAlternativeTimelineText(!alternativeTimelineText);
  };

  return (
    <div
      className={`experience__timeline__section__container  ${
        hidden ? "hidden" : "show"
      } `}
      onClick={handleClick}
    >
      <div
        className={`experience__timeline__section__container__text ${category} ${
          alternativeTimelineText ? "hidden" : ""
        }`}
      >
        <p>
          {year}&nbsp;&nbsp;
          {location}
        </p>
        <p>{company}</p>
        <p>{position}</p>
      </div>
      <div
        className={`experience__timeline__section__container__text__change ${category} ${
          alternativeTimelineText ? "" : "hidden"
        }`}
      >
        <p>
          {year}&nbsp;&nbsp;
          {location}
        </p>
        <p>{company}</p>
        <p>{position}</p>
        <img src={src} srcSet={srcSet} />
        <p>{discription}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const containershow = document.querySelectorAll(
      ".experience__timeline__section__container.show"
    );
    containershow.forEach((container) => {
      container.classList.remove("last");
    });
    if (containershow.length > 0) {
      const lastContainer = containershow[containershow.length - 1];
      lastContainer.classList.add("last");
    }
  }, [selectedCategory]);

  return (
    <div className="experience">
      <div className="experience__title">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="experience__select">
        <h5 onClick={() => handleCategoryClick("all")}>ALL</h5>
        <h5 onClick={() => handleCategoryClick("education")}>EDUCATION</h5>
        <h5 onClick={() => handleCategoryClick("intern")}>INTERN</h5>
        <h5 onClick={() => handleCategoryClick("activity")}>ACTIVITIES</h5>
      </div>
      <div className="experience__timeline">
        <div className="experience__timeline__section">
          {TimelineList.map((item, index) => (
            <TimelineItem
              key={index}
              category={item.category}
              year={item.year}
              location={item.location}
              company={item.company}
              position={item.position}
              discription={item.discription}
              src={item.src}
              srcSet={item.srcSet}
              hidden={
                selectedCategory !== "all" && item.category !== selectedCategory
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
