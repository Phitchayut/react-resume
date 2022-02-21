import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./PortfolioList.css";
import {portfolio} from '../../data'

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias rem
          minima dolor, quas quasi veniam ducimus optio nostrum dolorem earum?
        </p>
      </div>
      <div className="pl-list">
          {portfolio.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link}/>
          ))}
      </div>
    </div>
  );
};

export default PortfolioList;
