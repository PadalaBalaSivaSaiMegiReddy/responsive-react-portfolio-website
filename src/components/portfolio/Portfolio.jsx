import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "feature":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
            title={item.title}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
          {data.map((d) => (
        <div key={d.id} className="item">
            <div >
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
        </div>
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
