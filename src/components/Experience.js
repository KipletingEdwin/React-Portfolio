import React from "react";
import skills from "../data/skills.json";
import history from "../data/history.json";
// import j from "../assets/js.png"

function Experience() {
  return (
    
    <section id="experience" className="exContainer" >
      {/* <img src={j} alt="hey"/> */}
      <h2> Experience </h2>
      <div className="exContent" >
        <div className="skillSection" >
          {" "}
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skill" >
                <div className="myImageContainer" >
                  {" "}
                  <img src={skill.imageSrc} alt={skill.title} />{" "}
                </div>

                <p>{skill.title}</p>
              </div>
            );
          })}{" "}
        </div>
        <ul>
          {history.map((historyItem, id) => {
            return (
              <li key={id}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className="historyItemDetails">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`} </h3>
                  <p> {`${historyItem.startDate} - ${historyItem.endDate}`} </p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}> {experience} </li>;
                    })}{" "}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
