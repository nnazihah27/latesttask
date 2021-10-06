import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./project.scss";
import {
  ToolExpert,
  ProgLangu,

 
  
} from "../ProjectArray";

export default function Project() {
  const [selected, setSelected] = useState("ProgLangu");
  const [data, setData] = useState([]);
  const list = [

    {
      id: "ProgLangu",
      title: "Programming Language Learned ",
    },
    {
        id: "ToolExpert",
        title: "Software/Tools Have Explored",
      },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "ToolExpert":
        setData(ToolExpert);
        break;
      case "ProgLangu":
        setData(ProgLangu);
        break;
      default:
        setData(ProgLangu);
    }
  }, [selected]);

  return (
    <div className="project" id="project">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
